#!/bin/bash

# ============================================
# Ice Cream Paradise - 24/7 Server Setup Script
# ============================================

echo "🍦 Ice Cream Paradise - Server Setup for 24/7 Operation"
echo "========================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running as root or with sudo
if [ "$EUID" -ne 0 ]; then 
    echo -e "${YELLOW}Note: For system-wide installation, run with sudo:${NC}"
    echo "    Example: sudo $0"
fi

# Create logs directory
echo ""
echo -e "${YELLOW}[1/5]${NC} Creating logs directory..."
mkdir -p /home/jaivik/Documents/icecream-project/logs
touch /home/jaivik/Documents/icecream-project/logs/server.log
touch /home/jaivik/Documents/icecream-project/logs/error.log
echo -e "${GREEN}✓${NC} Logs directory created"

# Copy service file to system directory
echo ""
echo -e "${YELLOW}[2/5]${NC} Installing systemd service..."
SERVICE_FILE="/home/jaivik/Documents/icecream-project/icecream-server.service"
SYSTEMD_DIR="/etc/systemd/system/"

if [ -f "$SERVICE_FILE" ]; then
    # Try to copy with sudo if needed
    if [ "$EUID" -eq 0 ]; then
        cp "$SERVICE_FILE" "$SYSTEMD_DIR"
        chmod 644 "$SYSTEMD_DIR/icecream-server.service"
    else
        sudo cp "$SERVICE_FILE" "$SYSTEMD_DIR"
        sudo chmod 644 "$SYSTEMD_DIR/icecream-server.service"
    fi
    echo -e "${GREEN}✓${NC} Service file installed to $SYSTEMD_DIR"
else
    echo -e "${RED}✗${NC} Service file not found at $SERVICE_FILE"
    exit 1
fi

# Reload systemd daemon
echo ""
echo -e "${YELLOW}[3/5]${NC} Reloading systemd daemon..."
if [ "$EUID" -eq 0 ]; then
    systemctl daemon-reload
else
    sudo systemctl daemon-reload
fi
echo -e "${GREEN}✓${NC} Systemd daemon reloaded"

# Enable service to start on boot
echo ""
echo -e "${YELLOW}[4/5]${NC} Enabling auto-start on boot..."
if [ "$EUID" -eq 0 ]; then
    systemctl enable icecream-server
else
    sudo systemctl enable icecream-server
fi
echo -e "${GREEN}✓${NC} Service enabled for auto-start"

# Start the service
echo ""
echo -e "${YELLOW}[5/5]${NC} Starting the server..."
if [ "$EUID" -eq 0 ]; then
    systemctl start icecream-server
else
    sudo systemctl start icecream-server
fi

# Wait a moment and check status
sleep 2
echo ""
echo "========================================================"
echo -e "${GREEN}🍦 Server installed successfully!${NC}"
echo "========================================================"
echo ""
echo "Useful Commands:"
echo "  View status:    systemctl status icecream-server"
echo "  View logs:      journalctl -u icecream-server -f"
echo "  Stop server:    sudo systemctl stop icecream-server"
echo "  Start server:   sudo systemctl start icecream-server"
echo "  Restart:        sudo systemctl restart icecream-server"
echo "  Disable auto:   sudo systemctl disable icecream-server"
echo ""
echo "Log files:"
echo "  Server:  /home/jaivik/Documents/icecream-project/logs/server.log"
echo "  Errors:  /home/jaivik/Documents/icecream-project/logs/error.log"
echo ""
echo -e "${GREEN}Server will now run 24/7 and auto-start on system boot!${NC}"

