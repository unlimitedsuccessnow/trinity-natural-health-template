# Quick Perplexity MCP Setup

## Fast Setup (5 minutes)

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


