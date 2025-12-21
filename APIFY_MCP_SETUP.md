# Apify MCP Setup Guide

This guide will help you set up Apify MCP server in Cursor to enable web scraping, data extraction, and automation capabilities through Apify's extensive library of Actors.

## Prerequisites

1. **Node.js** installed (version 18 or higher)
   - Check: `node --version`
   - Download: https://nodejs.org/

2. **Apify API Token**
   - Visit: https://console.apify.com/account/integrations
   - Generate a new API token
   - Keep it secure (you'll need it for configuration)

## What is Apify MCP?

Apify MCP provides access to Apify's platform of web scraping and automation Actors. You can:
- Scrape websites and extract data
- Run automation workflows
- Access pre-built Actors for common tasks
- Build custom scraping solutions

## Setup Steps

### Step 1: Get Your Apify API Token

1. Go to: https://console.apify.com/account/integrations
2. Click "Create new token"
3. Give it a name (e.g., "Cursor MCP")
4. Copy the token (you'll only see it once!)

### Step 2: Configure Cursor MCP Settings

In Cursor, MCP servers are configured through the settings. Here's how to add Apify MCP:

#### Option A: Through Cursor Settings UI

1. Open Cursor Settings (Ctrl+, or Cmd+,)
2. Search for "MCP" or "Model Context Protocol"
3. Click "Edit MCP Settings" or similar
4. Add the Apify server configuration (see configuration template below)

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
    "apify": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@apify/actors-mcp-server"],
      "env": {
        "APIFY_TOKEN": "apify_api_bn6hf5yjEq4rgfy1O70gq17jfjZ3Zq3Zz5vY"
      }
    }
  }
}
```

**Important**: Replace `YOUR_APIFY_API_TOKEN_HERE` with your actual Apify API token.

### Step 4: Environment Variables (Alternative Method)

If you prefer to use environment variables instead of embedding the API token in the config:

1. **Windows (PowerShell)**:
   ```powershell
   $env:APIFY_TOKEN="your_api_token_here"
   ```

2. **Windows (Command Prompt)**:
   ```cmd
   set APIFY_TOKEN=your_api_token_here
   ```

3. **Mac/Linux**:
   ```bash
   export APIFY_TOKEN=your_api_token_here
   ```

Then use this simplified config:

```json
{
  "mcpServers": {
    "apify": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@apify/actors-mcp-server"]
    }
  }
}
```

### Step 5: Restart Cursor

After adding the configuration:
1. Save the MCP settings
2. **Restart Cursor completely** (close and reopen)
3. The Apify MCP server should now be available

## Verification

To verify the setup is working:

1. Check if Apify MCP appears in your available MCP tools
2. Try using it with a simple scraping task
3. You should see Apify MCP functions available in the tool list

## Usage Examples

Once set up, you can use Apify MCP for various tasks:

### Example 1: Scrape a Website
```
Use Apify to scrape product information from https://example.com/products
```

### Example 2: Extract Data
```
Use Apify to extract all links and titles from https://example.com/blog
```

### Example 3: Run a Pre-built Actor
```
Use Apify to run the Web Scraper actor on https://example.com
```

## Available Apify Actors

Apify provides hundreds of pre-built Actors for common tasks:

- **Web Scraper**: General-purpose web scraping
- **Cheerio Scraper**: Fast HTML parsing
- **Puppeteer Scraper**: JavaScript-rendered pages
- **Sitemap Scraper**: Extract URLs from sitemaps
- **Google Search Scraper**: Search result extraction
- And many more at: https://apify.com/store

## Configuration Options

### Environment Variables

- `APIFY_TOKEN` (required): Your Apify API token for authentication

## Troubleshooting

### Issue: MCP server not appearing

**Solutions**:
1. Verify Node.js is installed: `node --version`
2. Check API token is correct
3. Restart Cursor completely
4. Check Cursor's MCP logs/console for errors

### Issue: Authentication errors

**Solutions**:
1. Verify the API token is correct (no extra spaces)
2. Check if the API token has expired
3. Ensure your Apify account is active
4. Regenerate the token if needed

### Issue: Actor not found

**Solutions**:
1. Check the Actor name is correct
2. Verify the Actor is public or you have access
3. Check Apify console for Actor availability

## Security Notes

- **Never commit your API token to version control**
- Store API tokens in environment variables or secure credential storage
- Use `.gitignore` to exclude any config files containing tokens
- Rotate API tokens periodically
- Use read-only tokens when possible

## Additional Resources

- Apify Documentation: https://docs.apify.com/
- Apify MCP Server: https://www.npmjs.com/package/@apify/actors-mcp-server
- Apify Console: https://console.apify.com/
- Apify Store (Actors): https://apify.com/store
- Cursor MCP Documentation: Check Cursor's help/docs for MCP setup

## Next Steps

After setup, you can:
1. Browse available Actors in the Apify Store
2. Run pre-built Actors for common scraping tasks
3. Create custom Actors for specific needs
4. Integrate scraping workflows into your projects
5. Use Apify for SEO data collection, competitor analysis, and more

---

**Note**: If you encounter any issues, check Cursor's MCP server logs or consult the Apify MCP server documentation at https://docs.apify.com/platform/integrations/mcp.


