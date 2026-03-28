# MCP Server (beta)

## What is the Cakemail MCP Server?

The Cakemail MCP (Model Context Protocol) Server is an open-source integration that brings Cakemail's email marketing platform to any AI assistant or development environment that supports the Model Context Protocol. This enables developers and marketers to manage email campaigns, analyze performance, and handle contacts through natural language commands or programmatic interfaces.

## Understanding MCP (Model Context Protocol)

MCP is an open protocol that enables seamless integration between AI assistants and external tools. It provides a standardized way for AI systems to:
- Discover available tools and their capabilities
- Execute functions with proper authentication
- Handle responses and errors consistently
- Maintain context across conversations

## Where Can You Use the Cakemail MCP Server?

### 1. **Claude Desktop** 
The Cakemail MCP Server is available as an official Claude Extension in the Claude Desktop marketplace.

**Installation**: 
- One-click install from Claude Extensions marketplace
- Automatic updates and official support
- Optimized for Claude's conversational interface

**Use Case**: Ideal for marketers and business users who want conversational email marketing.

### 2. **Cursor IDE** 
Cursor, the AI-powered code editor, fully supports MCP servers, making it perfect for developers who want to integrate email marketing into their development workflow.

**Installation**:
```json
// In Cursor settings (cursor_settings.json)
{
  "mcpServers": {
    "cakemail": {
      "command": "node",
      "args": ["/path/to/cakemail-mcp-server/build/index.js"],
      "env": {
        "CAKEMAIL_USERNAME": "your-email@example.com",
        "CAKEMAIL_PASSWORD": "your-password"
      }
    }
  }
}
```

**Use Cases**:
- Generate email templates while coding
- Test email campaigns during development
- Automate deployment notifications
- Manage customer communications from your IDE

**Integration Example**:
```javascript
import { MCPClient } from '@modelcontextprotocol/sdk';

const client = new MCPClient({
  command: 'node',
  args: ['/path/to/cakemail-mcp-server/build/index.js'],
  env: {
    CAKEMAIL_USERNAME: process.env.CAKEMAIL_USERNAME,
    CAKEMAIL_PASSWORD: process.env.CAKEMAIL_PASSWORD
  }
});

// Use the client to execute commands
const result = await client.callTool('cakemail_create_campaign', {
  name: 'Welcome Email',
  subject: 'Welcome to our newsletter!',
  // ... other parameters
});
```

## Technical Architecture

### Core Components

```
┌─────────────────────┐
│   AI Application    │  (Claude, Cursor, etc.)
│  (MCP Client)       │
└──────────┬──────────┘
           │ MCP Protocol
           ▼
┌─────────────────────┐
│ Cakemail MCP Server │
│  - OAuth Handler    │
│  - Tool Registry    │
│  - Rate Limiter     │
└──────────┬──────────┘
           │ HTTPS
           ▼
┌─────────────────────┐
│   Cakemail API      │
│  (REST Endpoints)   │
└─────────────────────┘
```


## Installation Guide

### Prerequisites
- Node.js 18 or higher
- Cakemail account with API access
- MCP-compatible client application

### Step 1: Clone the Repository
```bash
git clone https://github.com/cakemail/cakemail-mcp-server.git
cd cakemail-mcp-server
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Build the Server
```bash
npm run build
```

### Step 4: Configure Environment
Create a `.env` file:
```env
CAKEMAIL_USERNAME=your-email@example.com
CAKEMAIL_PASSWORD=your-password
CAKEMAIL_BASE_URL=https://api.cakemail.dev
```

### Step 5: Configure Your MCP Client

**For Development Environments** (Cursor, Continue.dev):
```json
{
  "mcpServers": {
    "cakemail": {
      "command": "node",
      "args": ["./build/index.js"],
      "cwd": "/absolute/path/to/cakemail-mcp-server",
      "env": {
        "CAKEMAIL_USERNAME": "${env:CAKEMAIL_USERNAME}",
        "CAKEMAIL_PASSWORD": "${env:CAKEMAIL_PASSWORD}"
      }
    }
  }
}
```

**For Custom Applications**:
```javascript
const { spawn } = require('child_process');

const mcpServer = spawn('node', ['./build/index.js'], {
  cwd: '/path/to/cakemail-mcp-server',
  env: {
    ...process.env,
    CAKEMAIL_USERNAME: 'your-email@example.com',
    CAKEMAIL_PASSWORD: 'your-password'
  }
});
```

## Security Considerations

### Authentication
- OAuth 2.0 with automatic token refresh
- Credentials stored securely in environment variables
- No hardcoded secrets in code

### Data Protection
- All communication over HTTPS
- No local data storage
- Audit logs for compliance

### Access Control
- User-level permissions respected
- Multi-tenant isolation for agencies
- Rate limiting to prevent abuse

## Contributing

The Cakemail MCP Server is open source and welcomes contributions!

### How to Contribute
1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Submit a pull request

### Development Setup
```bash
# Install dev dependencies
npm install --save-dev

# Run tests
npm test

# Run in development mode
npm run dev

# Lint code
npm run lint
```

## Resources

### Documentation
- **MCP Protocol Spec**: [modelcontextprotocol.org](https://modelcontextprotocol.org)
- **Cakemail API**: [cakemail.dev](https://cakemail.dev/)
- **GitHub Repository**: [github.com/cakemail/cakemail-mcp-server](https://github.com/cakemail/cakemail-mcp-server)

### Support
- **Issues**: GitHub Issues for bug reports
- **Email**: support@cakemail.com

## License

The Cakemail MCP Server is licensed under the MIT License. See [LICENSE](https://github.com/cakemail/cakemail-mcp-server/blob/main/LICENSE) file for details.