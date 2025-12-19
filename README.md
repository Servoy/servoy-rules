# Servoy Rules

AI knowledge base plugin for Servoy AI Bridge MCP server.

## Overview

Servoy Rules is a Servoy Developer plugin that provides AI knowledge base (embeddings and rules) for the AI Bridge MCP server. This enables AI-assisted development with semantic understanding of Servoy operations.

## Contents

### Embeddings
Short prompts (2-5 words) that help AI understand user intent via similarity search:
- **forms.txt** - Form creation and manipulation prompts
- **relations.txt** - Relation creation and configuration prompts
- **valuelists.txt** - ValueList creation and setup prompts
- **styles.txt** - CSS/style management prompts

### Rules
Detailed instructions and examples for AI operations:
- **forms.md** - Form operation tools, rules, workflows, and examples
- **relations.md** - Relation operation tools, rules, workflows, and examples
- **valuelists.md** - ValueList operation tools, rules, workflows, and examples
- **styles.md** - Style management tools, rules, workflows, and examples

## Installation

### Via Servoy Package Manager (Recommended)

1. Open Servoy Developer
2. Go to **Window > Servoy Package Manager**
3. Search for "Servoy Rules"
4. Click **Install**
5. Restart Servoy Developer when prompted

### Manual Installation

1. Download `servoy-rules.zip` from releases
2. Extract to your Servoy Developer plugins directory
3. Restart Servoy Developer
4. Knowledge base will be automatically loaded by AI Bridge

## Usage

Once installed, the knowledge base is automatically discovered and loaded by the Servoy AI Bridge plugin. No additional configuration needed.

The AI Bridge will use this knowledge to:
- Understand user intent through semantic similarity search
- Provide contextual guidance for Servoy operations
- Generate appropriate MCP tool calls with correct parameters
- Follow best practices and workflows

## For Developers

### Package Structure

This is a standard Servoy Web-Service package following OSGi bundle conventions:

```
servoy-rules/
├── META-INF/MANIFEST.MF      # OSGi bundle manifest
├── lib/                      # Service specification (minimal)
├── embeddings/               # AI prompt examples
├── rules/                    # AI instruction documents
├── webpackage.json          # SPM metadata
└── .project                 # Servoy NG Package nature
```

### Creating Custom Knowledge Packages

You can create your own knowledge packages for company-specific or project-specific AI guidance:

1. Copy this package structure
2. Modify `embeddings/` and `rules/` content
3. Update `webpackage.json` with your package name
4. Update `MANIFEST.MF` with your bundle symbolic name
5. Build and distribute via SPM

## Version

**1.0.0** - December 15, 2025
- Initial release
- 4 embedding categories (forms, relations, valuelists, styles)
- 4 comprehensive rule files
- 28 MCP tools documented

## Building from Source

To create the release zip file:

```bash
# Install dependencies (first time only)
npm install

# Create servoy-rules.zip
npm run make_release
```

The `servoy-rules.zip` file will be created in the root directory.

## Requirements

- Servoy Developer 2024.12 or higher
- Servoy AI Bridge plugin

## License

See LICENSE file.

## Support

For issues or questions:
- GitHub Issues: https://github.com/Servoy/servoy-rules
- Servoy Forum: https://forum.servoy.com
