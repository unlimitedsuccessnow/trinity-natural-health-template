# Figma MCP Setup Guide

This guide will help you set up Figma MCP server in Cursor to integrate Figma design files into your development workflow.

## Overview

Figma MCP allows you to:
- Access Figma design files directly from Cursor
- Get design specifications, colors, fonts, and components
- Sync design context with your code
- Extract design tokens and assets

## Setup Options

Figma offers two MCP server options:

### Option 1: Remote MCP Server (Recommended)
- Works with Figma in the browser
- No desktop app required
- URL: `https://mcp.figma.com/mcp`

### Option 2: Desktop MCP Server
- Requires Figma desktop app
- Local connection: `http://127.0.0.1:3845/mcp`
- Must enable MCP server in Dev Mode

---

## Setup Steps

### Method 1: Remote MCP Server (Easiest)

#### Step 1: Configure in Cursor

**Through Cursor Settings UI:**
1. Open Cursor Settings (`Ctrl+,` on Windows or `Cmd+,` on Mac)
2. Search for "MCP" or "Model Context Protocol"
3. Click "Edit MCP Settings"
4. Add the Figma remote server configuration (see template below)
5. Save and restart Cursor

**Direct File Edit:**
1. Navigate to Cursor's settings directory:
   - **Windows**: `%APPDATA%\Cursor\User\settings.json` or MCP config file
   - **Mac**: `~/Library/Application Support/Cursor/User/settings.json`
   - **Linux**: `~/.config/Cursor/User/settings.json`
2. Add the Figma configuration
3. Save and restart Cursor

#### Step 2: Authenticate

1. After restarting Cursor, you'll be prompted to authenticate
2. Click "Connect" next to Figma
3. Authorize access in your browser
4. Grant permissions to access your Figma files

#### Step 3: Configuration Template

Add this to your Cursor MCP settings:

```json
{
  "mcpServers": {
    "figma": {
      "type": "http",
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

---

### Method 2: Desktop MCP Server

#### Step 1: Install Figma Desktop App

1. Download Figma Desktop: https://www.figma.com/downloads/
2. Install and open the app
3. Sign in to your Figma account

#### Step 2: Enable MCP Server in Figma

1. Open a Figma Design file
2. Switch to **Dev Mode** by clicking the toggle in the toolbar
3. In the right sidebar, find **MCP Server** section
4. Enable the MCP server
5. Copy the server URL (typically: `http://127.0.0.1:3845/mcp`)

#### Step 3: Configure in Cursor

Add this configuration to your Cursor MCP settings:

```json
{
  "mcpServers": {
    "figma-desktop": {
      "type": "http",
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```

**Important**: The Figma desktop app must be running and have a file open in Dev Mode for this to work.

---

## Complete Configuration Example

Here's a complete example with all MCP servers (Perplexity, Apify, and Figma):

```json
{
  "mcpServers": {
    "perplexity": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@perplexity-ai/mcp-server"],
      "env": {
        "PERPLEXITY_API_KEY": "YOUR_API_KEY_HERE",
        "PERPLEXITY_RETURN_IMAGES": "true",
        "PERPLEXITY_DEFAULT_MODEL": "sonar-pro"
      }
    },
    "apify": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@apify/actors-mcp-server"],
      "env": {
        "APIFY_TOKEN": "YOUR_APIFY_API_TOKEN_HERE"
      }
    },
    "figma": {
      "type": "http",
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

---

## Verification

To verify the setup is working:

1. **Restart Cursor completely**
2. Check if Figma MCP appears in your available MCP tools
3. Try using it with a query like:
   ```
   Get the color palette from my Figma design file
   ```
4. You should see Figma MCP functions available in the tool list

---

## Usage Examples

Once set up, you can use Figma MCP to:

### 1. Get Design Specifications
```
Get the design tokens (colors, fonts, spacing) from my Figma file
```

### 2. Extract Components
```
List all components in my Figma design file
```

### 3. Get Design Context
```
What are the dimensions and styles of the header component in my Figma file?
```

### 4. Sync Design to Code
```
Extract the CSS variables for colors from my Figma design
```

---

## Troubleshooting

### Issue: MCP server not connecting

**Solutions**:
1. For remote server: Check your internet connection
2. For desktop server: Ensure Figma desktop app is running
3. Verify the URL is correct in your config
4. Restart Cursor completely
5. Check Cursor's MCP logs for errors

### Issue: Authentication failed

**Solutions**:
1. Make sure you're signed in to Figma
2. Try re-authenticating through Cursor
3. Check if your Figma account has API access enabled
4. Clear browser cookies and try again

### Issue: Desktop server not working

**Solutions**:
1. Ensure Figma desktop app is open
2. Make sure you have a file open in Dev Mode
3. Verify MCP server is enabled in the right sidebar
4. Check that the port (3845) is not blocked by firewall
5. Try restarting the Figma desktop app

### Issue: Can't access files

**Solutions**:
1. Verify you have access to the Figma file
2. Check file permissions in Figma
3. Make sure you're authenticated with the correct account
4. Try accessing the file directly in Figma first

---

## Security Notes

- **Authentication**: Figma MCP requires OAuth authentication
- **Permissions**: You'll need to grant access to your Figma files
- **File Access**: Only files you have access to in Figma will be available
- **API Limits**: Be aware of Figma API rate limits

---

## Additional Resources

- **Figma MCP Documentation**: https://developers.figma.com/docs/figma-mcp-server/
- **Remote Server Setup**: https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/
- **Desktop Server Setup**: https://help.figma.com/hc/en-us/articles/35281186390679-Figma-MCP-collection-How-to-setup-the-Figma-desktop-MCP-server
- **Figma API Docs**: https://www.figma.com/developers/api

---

## Next Steps

After setup, you can:

1. **Access design files** directly from Cursor
2. **Extract design tokens** (colors, fonts, spacing) for your code
3. **Get component specifications** to implement designs accurately
4. **Sync design changes** with your development workflow
5. **Generate code** based on Figma designs

---

**Note**: If you encounter any issues, check Cursor's MCP server logs or consult the Figma MCP documentation.





