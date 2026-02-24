# 🍦 Ice Cream Paradise - 24/7 Server Setup Guide

## What is 24/7 Server?

A **24/7 server** runs continuously, even when you're not logged in. It automatically starts when your computer boots and restarts if it crashes.

---

## How Systemd Works (Explanation)

**Systemd** is a Linux system manager that:
- ✅ Starts services automatically on boot
- ✅ Restarts services if they crash
- ✅ Runs services in background (no terminal needed)
- ✅ Manages logs and status
- ✅ Handles dependencies (starts MongoDB first)

### Key Concepts:
| Term | Meaning |
|------|---------|
| **Service** | A program that runs in background |
| **Daemon** | Another name for background service |
| **Enable** | Start automatically on boot |
| **Start** | Run the service right now |
| **Status** | Check if running |
| **Restart** | Stop and start again |

---

## Files Created

```
icecream-project/
├── icecream-server.service    # Systemd service configuration
├── setup-24-7.sh             # Setup script (one-time use)
└── logs/
    ├── server.log            # Normal output
    └── error.log             # Error messages
```

---

## Quick Setup (Run once)

```bash
cd /home/jaivik/Documents/icecream-project

# Option A: With sudo (recommended)
sudo ./setup-24-7.sh

# Option B: Manual installation
sudo cp icecream-server.service /etc/systemd/system/
sudo chmod 644 /etc/systemd/system/icecream-server.service
sudo systemctl daemon-reload
sudo systemctl enable icecream-server
sudo systemctl start icecream-server
```

---

## Daily Commands

```bash
# Check if server is running
systemctl status icecream-server

# View live logs
journalctl -u icecream-server -f

# View recent logs (last 50 lines)
journalctl -u icecream-server -n 50

# Stop the server
sudo systemctl stop icecream-server

# Start the server
sudo systemctl start icecream-server

# Restart the server
sudo systemctl restart icecream-server

# Disable auto-start (server won't start on boot)
sudo systemctl disable icecream-server

# Re-enable auto-start
sudo systemctl enable icecream-server
```

---

## What Happens During Setup?

1. **Create logs directory** - Stores output files
2. **Copy service file** - Moves config to system directory
3. **Reload systemd** - System reads new configuration
4. **Enable auto-start** - Marks service to run on boot
5. **Start immediately** - Server begins running right now

---

## Service Configuration Explained

```ini
[Unit]
Description=Ice Cream Paradise Server    # Human-readable name
After=network.target mongodb.service     # Wait for MongoDB first

[Service]
Type=simple                              # Simple background process
User=jaivik                              # Run as this user
WorkingDirectory=/path/to/project        # Where files are located
ExecStart=/usr/bin/node server/server.js # Command to start
Restart=always                           # Always restart on crash
RestartSec=10                            # Wait 10 seconds before restart

[Install]
WantedBy=multi-user.target               # Start after system boots
```

---

## Monitoring the Server

### Check Status:
```bash
$ systemctl status icecream-server

● icecream-server.service - Ice Cream Paradise Server
     Loaded: loaded (/etc/systemd/system/icecream-server.service; enabled)
     Active: active (running) since Mon 2024-01-15 10:30:00 IST; 5min ago
   Main PID: 1234 (node)
      Tasks: 11 (limit: 4915)
     Memory: 50.0M
```

### View Logs:
```bash
# All logs
journalctl -u icecream-server

# Live logs (like tail -f)
journalctl -u icecream-server -f

# Logs from today
journalctl -u icecream-server --since today
```

---

## Troubleshooting

### Server won't start?
```bash
# Check detailed error
journalctl -u icecream-server -n 20

# Verify MongoDB is running
systemctl status mongodb

# Restart MongoDB if needed
sudo systemctl restart mongodb
```

### Permission denied?
```bash
# Make sure script is executable
chmod +x setup-24-7.sh

# Run with sudo
sudo ./setup-24-7.sh
```

### Change port?
Edit `icecream-server.service` and change:
```ini
Environment=PORT=3000
```
Then reload:
```bash
sudo systemctl daemon-reload
sudo systemctl restart icecream-server
```

---

## Benefits of 24/7 Server

| Feature | Without Systemd | With Systemd |
|---------|-----------------|--------------|
| Auto-start on boot | ❌ | ✅ |
| Auto-restart on crash | ❌ | ✅ |
| Runs in background | ❌ | ✅ |
| Logs management | Manual | Automatic |
| Status monitoring | No | Yes |

---

## Access Your Server

Once running 24/7, access from:
- **Local:** http://localhost:3000
- **Network:** http://YOUR_IP:3000
- **LAN:** http://192.168.x.x:3000

---

## For Remote Access (Port Forwarding)

If you want access from outside your network:
1. Set up port forwarding on your router (port 3000)
2. Use a dynamic DNS service
3. Consider using a reverse proxy (nginx)

---

**🍦 Your server is now ready for 24/7 operation!**

