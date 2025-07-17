# How to Add GitHub Copilot Subscription to Cursor IDE

## Overview

Cursor is an AI-first code editor built on Visual Studio Code that supports GitHub Copilot integration alongside its own AI features. This guide will walk you through adding your GitHub Copilot subscription to Cursor.

## Prerequisites

- Cursor IDE installed on your system
- Active GitHub Copilot subscription
- GitHub account with Copilot access

## Method 1: Install GitHub Copilot Extension

### Step 1: Install the GitHub Copilot Extension

1. Open Cursor IDE
2. Go to the Extensions panel (View → Extensions or `Ctrl+Shift+X`)
3. Search for "GitHub Copilot"
4. Install the official GitHub Copilot extension by GitHub
5. Also install the "GitHub Copilot Chat" extension for enhanced functionality

### Step 2: Sign in to GitHub

1. After installation, you'll be prompted to sign in to GitHub
2. Click "Sign in to GitHub" when prompted
3. This will open your browser to authenticate with GitHub
4. Complete the authentication process
5. Return to Cursor - it should now be connected to your GitHub account

### Step 3: Configure Copilot Settings

1. Once signed in, GitHub Copilot should automatically activate
2. You can verify it's working by:
   - Looking for the GitHub Copilot icon in the status bar
   - Typing code and seeing Copilot suggestions appear
   - The suggestions appear as gray text that you can accept with `Tab`

## Method 2: Using Both Cursor Tab and GitHub Copilot

### Disable Cursor's Built-in Tab Completion (Optional)

If you prefer to use only GitHub Copilot:

1. Click the Cursor Tab icon in the bottom status bar
2. Toggle it off to disable Cursor's native tab completion
3. This allows GitHub Copilot to work without interference

### Using Both Systems Together

You can also run both Cursor Tab and GitHub Copilot simultaneously:

1. Keep both enabled in the bottom status bar
2. Both will provide suggestions, though they may sometimes overlap
3. You can choose which suggestions to accept

## Troubleshooting Common Issues

### Issue 1: "User not authorized" or Token Errors

If you see frequent re-login prompts:

1. Sign out of GitHub Copilot completely
2. Clear Cursor's cache (Settings → Advanced → Clear Cache)
3. Restart Cursor
4. Re-authenticate with GitHub

### Issue 2: Extension Not Found

If the GitHub Copilot extension doesn't appear:

1. Ensure you have an active GitHub Copilot subscription
2. Check that your GitHub account has Copilot access
3. Try restarting Cursor and searching again

### Issue 3: Conflicting Suggestions

If Cursor Tab and GitHub Copilot conflict:

1. Disable one of them via the status bar icons
2. Or configure them to work in different contexts
3. You can toggle between them as needed

## Alternative: Using Custom API Keys

### For Advanced Users

If you want more control, you can also configure custom API keys:

1. Go to Settings → Models
2. Add your OpenAI API key for GPT models
3. Add your Anthropic API key for Claude models
4. This gives you direct access to AI models at your own cost

## Verification

To verify GitHub Copilot is working:

1. Create a new file (e.g., `test.py`)
2. Start typing a function:
   ```python
   def calculate_fibonacci(n):
   ```
3. You should see gray text suggestions from Copilot
4. Press `Tab` to accept suggestions
5. Check the status bar for the GitHub Copilot icon

## Pricing Considerations

- **GitHub Copilot**: $10/month for individuals, $19/month for businesses
- **Cursor Pro**: $20/month (includes Cursor's AI features)
- You can use GitHub Copilot with Cursor's free tier
- Using both requires separate subscriptions

## Best Practices

1. **Use GitHub Copilot for**: Code completion, boilerplate generation
2. **Use Cursor's AI for**: Complex refactoring, codebase understanding, chat-based assistance
3. **Toggle between them** based on your current task
4. **Keep both updated** for the best experience

## Privacy Considerations

- GitHub Copilot sends code snippets to GitHub's servers
- Cursor's Privacy Mode can limit data sharing
- Review both services' privacy policies for enterprise use

## Additional Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Cursor Documentation](https://docs.cursor.com)
- [Cursor Community Forum](https://forum.cursor.com)

## Conclusion

Adding GitHub Copilot to Cursor is straightforward through the extensions marketplace. You can use it alongside Cursor's native AI features or as a replacement, depending on your preferences. The combination provides a powerful AI-assisted coding experience that can significantly boost productivity.

Remember that both services require active subscriptions and internet connectivity to function properly. Choose the configuration that best fits your workflow and budget.