# Quick MCP Setup Guide

This guide covers quick setup for Perplexity and Apify MCP servers.

## Perplexity MCP Setup (5 minutes)

### 1. Get Your API Key
- Go to: https://www.perplexity.ai/account/api/group
- Generate a new API key
- Copy it (you'll need it in step 3)

### 2. Install Node.js (if needed)
- Check: `node --version` in terminal
- If not installed: https://nodejs.org/

### 3. Configure in Cursor

**Method 1: Through Cursor Settings**
1. Open Cursor
2. Press `Ctrl+,` (Windows) or `Cmd+,` (Mac) to open Settings
3. Search for "MCP" or "Model Context Protocol"
4. Click "Edit MCP Settings" or find the MCP configuration option
5. Add the configuration from `cursor-mcp-config.json.example`
6. Replace `YOUR_API_KEY_HERE` with your actual API key
7. Save and restart Cursor

**Method 2: Direct File Edit**
1. Navigate to Cursor's settings directory:
   - **Windows**: `%APPDATA%\Cursor\User\settings.json` or look for MCP config
   - **Mac**: `~/Library/Application Support/Cursor/User/settings.json`
   - **Linux**: `~/.config/Cursor/User/settings.json`
2. Add the MCP server configuration (see `cursor-mcp-config.json.example`)
3. Save and restart Cursor

### 4. Verify Setup
- Restart Cursor
- Check if Perplexity MCP tools are available
- Try: "Use Perplexity to analyze this image"

## Configuration Template

Copy this into your Cursor MCP settings:

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
    }
  }
}
```

**Remember**: Replace `YOUR_API_KEY_HERE` with your actual API key!

## Usage Example

Once set up, you can:

1. **Capture screenshot**:
   ```
   Use Firecrawl to take a full-page screenshot of https://example.com
   ```

2. **Analyze for conversion optimization**:
   ```
   Use Perplexity to analyze this screenshot and provide a website conversion optimization review
   ```

## Troubleshooting

- **Not working?** Make sure you:
  1. Restarted Cursor completely
  2. Have Node.js installed
  3. API key is correct (no extra spaces)
  4. Checked Cursor's MCP logs for errors

For detailed instructions, see `PERPLEXITY_MCP_SETUP.md`

---

## Apify MCP Setup (5 minutes)

### 1. Get Your API Token
- Go to: https://console.apify.com/account/integrations
- Click "Create new token"
- Copy it (you'll only see it once!)

### 2. Install Node.js (if needed)
- Check: `node --version` in terminal
- If not installed: https://nodejs.org/

### 3. Configure in Cursor

**Method 1: Through Cursor Settings**
1. Open Cursor
2. Press `Ctrl+,` (Windows) or `Cmd+,` (Mac) to open Settings
3. Search for "MCP" or "Model Context Protocol"
4. Click "Edit MCP Settings" or find the MCP configuration option
5. Add the Apify configuration from `cursor-mcp-config.json.example`
6. Replace `YOUR_APIFY_API_TOKEN_HERE` with your actual API token
7. Save and restart Cursor

**Method 2: Direct File Edit**
1. Navigate to Cursor's settings directory:
   - **Windows**: `%APPDATA%\Cursor\User\settings.json` or look for MCP config
   - **Mac**: `~/Library/Application Support/Cursor/User/settings.json`
   - **Linux**: `~/.config/Cursor/User/settings.json`
2. Add the MCP server configuration (see `cursor-mcp-config.json.example`)
3. Save and restart Cursor

### 4. Verify Setup
- Restart Cursor
- Check if Apify MCP tools are available
- Try: "Use Apify to scrape data from a website"

## Configuration Template

Copy this into your Cursor MCP settings (adds both Perplexity and Apify):

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
    }
  }
}
```

**Remember**: Replace both `YOUR_API_KEY_HERE` and `YOUR_APIFY_API_TOKEN_HERE` with your actual credentials!

## Usage Examples

### Perplexity MCP
1. **Capture screenshot**:
   ```
   Use Firecrawl to take a full-page screenshot of https://example.com
   ```

2. **Analyze for conversion optimization**:
   ```
   Use Perplexity to analyze this screenshot and provide a website conversion optimization review
   ```

### Apify MCP
1. **Scrape website data**:
   ```
   Use Apify to scrape product information from https://example.com/products
   ```

2. **Extract links**:
   ```
   Use Apify to extract all links from https://example.com
   ```

## Troubleshooting

- **Not working?** Make sure you:
  1. Restarted Cursor completely
  2. Have Node.js installed
  3. API keys/tokens are correct (no extra spaces)
  4. Checked Cursor's MCP logs for errors

For detailed instructions:
- Perplexity: See `PERPLEXITY_MCP_SETUP.md`
- Apify: See `APIFY_MCP_SETUP.md`

---

## Figma MCP Setup (2 minutes)

### Option 1: Remote Server (Recommended - No Desktop App Needed)

1. **Configure in Cursor**:
   - Open Cursor Settings (`Ctrl+,` or `Cmd+,`)
   - Search for "MCP"
   - Click "Edit MCP Settings"
   - Add the Figma configuration (see template below)
   - Save and restart Cursor

2. **Authenticate**:
   - After restart, click "Connect" next to Figma
   - Authorize in your browser
   - Grant permissions

### Option 2: Desktop Server (Requires Figma Desktop App)

1. **Enable in Figma**:
   - Open Figma Desktop app
   - Open a Design file
   - Switch to **Dev Mode** (toggle in toolbar)
   - Enable **MCP Server** in right sidebar
   - Copy the server URL

2. **Configure in Cursor**:
   - Add the desktop server configuration (see template below)
   - Save and restart Cursor

## Configuration Template

### Remote Server (Easiest):
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

### Desktop Server:
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

## Complete Example (All Servers):
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

## Usage Examples

### Figma MCP
1. **Get design tokens**:
   ```
   Extract the color palette from my Figma design file
   ```

2. **Get component specs**:
   ```
   What are the dimensions and styles of the header component?
   ```

3. **Sync design to code**:
   ```
   Generate CSS variables from my Figma design colors
   ```

## Troubleshooting

- **Not connecting?** 
  - For remote: Check internet connection
  - For desktop: Ensure Figma app is running with file open in Dev Mode
- **Authentication issues?** Try re-authenticating through Cursor
- **Can't access files?** Verify you have access in Figma and are authenticated

For detailed instructions, see `FIGMA_MCP_SETUP.md`


