# Perplexity MCP Setup Guide

This guide will help you set up Perplexity MCP server in Cursor to enable image analysis for website conversion optimization reviews.

## Prerequisites

1. **Node.js** installed (version 18 or higher)
   - Check: `node --version`
   - Download: https://nodejs.org/

2. **Perplexity API Key**
   - Visit: https://www.perplexity.ai/account/api/group
   - Generate a new API key
   - Keep it secure (you'll need it for configuration)

## Setup Steps

### Step 1: Install Perplexity MCP Server

Open your terminal and run:

```bash
npm install -g @perplexity-ai/mcp-server
```

Or use npx (no global install needed):

```bash
npx -y @perplexity-ai/mcp-server
```

### Step 2: Configure Cursor MCP Settings

In Cursor, MCP servers are configured through the settings. Here's how to add Perplexity MCP:

#### Option A: Through Cursor Settings UI

1. Open Cursor Settings (Ctrl+, or Cmd+,)
2. Search for "MCP" or "Model Context Protocol"
3. Click "Edit MCP Settings" or similar
4. Add the Perplexity server configuration (see configuration template below)

#### Option B: Edit Settings File Directly

The MCP configuration is typically stored in:
- **Windows**: `%APPDATA%\Cursor\User\globalStorage\mcp.json` or similar
- **Mac**: `~/Library/Application Support/Cursor/User/globalStorage/mcp.json`
- **Linux**: `~/.config/Cursor/User/globalStorage/mcp.json`

### Step 3: Configuration Template

Add this configuration to your Cursor MCP settings:

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
        "PERPLEXITY_DEFAULT_MODEL": "sonar-pro",
        "PERPLEXITY_MAX_TOKENS": "2048"
      }
    }
  }
}
```

**Important**: Replace `YOUR_API_KEY_HERE` with your actual Perplexity API key.

### Step 4: Environment Variables (Alternative Method)

If you prefer to use environment variables instead of embedding the API key in the config:

1. **Windows (PowerShell)**:
   ```powershell
   $env:PERPLEXITY_API_KEY="your_api_key_here"
   $env:PERPLEXITY_RETURN_IMAGES="true"
   ```

2. **Windows (Command Prompt)**:
   ```cmd
   set PERPLEXITY_API_KEY=your_api_key_here
   set PERPLEXITY_RETURN_IMAGES=true
   ```

3. **Mac/Linux**:
   ```bash
   export PERPLEXITY_API_KEY=your_api_key_here
   export PERPLEXITY_RETURN_IMAGES=true
   ```

Then use this simplified config:

```json
{
  "mcpServers": {
    "perplexity": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@perplexity-ai/mcp-server"]
    }
  }
}
```

### Step 5: Restart Cursor

After adding the configuration:
1. Save the MCP settings
2. **Restart Cursor completely** (close and reopen)
3. The Perplexity MCP server should now be available

## Verification

To verify the setup is working:

1. Check if Perplexity MCP appears in your available MCP tools
2. Try using it with a simple query that includes an image
3. You should see Perplexity MCP functions available in the tool list

## Usage Workflow

Once set up, you can use this workflow:

1. **Capture Screenshot with Firecrawl MCP**:
   ```
   Use Firecrawl to take a full-page screenshot of https://example.com
   ```

2. **Analyze with Perplexity MCP**:
   ```
   Analyze this screenshot for website conversion optimization opportunities
   ```

## Configuration Options

### Available Environment Variables

- `PERPLEXITY_API_KEY` (required): Your Perplexity API key
- `PERPLEXITY_RETURN_IMAGES` (optional): Set to "true" to enable image processing
- `PERPLEXITY_DEFAULT_MODEL` (optional): Default model to use (e.g., "sonar-pro", "sonar")
- `PERPLEXITY_MAX_TOKENS` (optional): Maximum tokens for responses (default: 2048)
- `PERPLEXITY_TEMPERATURE` (optional): Temperature for responses (0.0-1.0)

### Model Options

- `sonar-pro`: Best for complex analysis and research
- `sonar`: Standard model for general queries
- `sonar-reasoning`: For reasoning tasks

## Troubleshooting

### Issue: MCP server not appearing

**Solutions**:
1. Verify Node.js is installed: `node --version`
2. Check API key is correct
3. Restart Cursor completely
4. Check Cursor's MCP logs/console for errors

### Issue: Image analysis not working

**Solutions**:
1. Ensure `PERPLEXITY_RETURN_IMAGES` is set to "true"
2. Verify your Perplexity API plan supports image analysis
3. Check that the image format is supported (JPEG, PNG, GIF, WebP)

### Issue: API key errors

**Solutions**:
1. Verify the API key is correct (no extra spaces)
2. Check if the API key has expired
3. Ensure your Perplexity account has API access enabled

## Security Notes

- **Never commit your API key to version control**
- Store API keys in environment variables or secure credential storage
- Use `.gitignore` to exclude any config files containing keys
- Rotate API keys periodically

## Additional Resources

- Perplexity API Documentation: https://docs.perplexity.ai/
- Perplexity MCP Server: https://www.npmjs.com/package/@perplexity-ai/mcp-server
- Cursor MCP Documentation: Check Cursor's help/docs for MCP setup

## Next Steps

After setup, you can:
1. Use Firecrawl MCP to capture website screenshots
2. Pass screenshots to Perplexity MCP for conversion optimization analysis
3. Get comprehensive reviews covering:
   - Visual design and layout
   - CTA placement and effectiveness
   - User experience flow
   - Conversion optimization opportunities
   - Mobile responsiveness
   - Trust signals and conversion elements

---

**Note**: If you encounter any issues, check Cursor's MCP server logs or consult the Perplexity MCP server documentation.


