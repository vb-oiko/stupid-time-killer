# A Stupid Time Killer

This is a prototype of an app that helps you kill time by generating 3 absolutely stupid ideas. It takes in what you were doing before, what you're going to do, and how much free time you have right now, and then generates ridiculous ideas for things to do next. Perfect for wasting time! 

This was built as part of **Toronto Stupid Ideas Hackathon 2025** by AJ Goris, Vasyl Boyko, and Divij Gupta.

## Technologies Used
- **HTML**: Structure of the webpage
- **CSS**: Styling and layout
- **TypeScript**: For interactivity and logic
- **OpenAI API**: To generate the stupid ideas

## Features
- Input your previous activity
- Input your future plans
- Specify how much free time you have
- Get 3 absurd, time-wasting ideas

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/stupid-time-killer.git
    cd stupid-time-killer
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up the OpenAI API key:
    - Create an `.env` file in the root of your project and add your API key:
    ```bash
    OPENAI_API_KEY=your_openai_api_key_here
    ```

4. Run the app locally:
    ```bash
    npm run dev
    ```

    The app should now be running at `http://localhost:3000`.

## How It Works

- **Step 1**: You enter a brief description of what you were doing before, what you plan to do next, and how much free time you have.
- **Step 2**: The app sends these details to the OpenAI API, which then generates three absurd ideas that you can try to kill time.
- **Step 3**: You laugh, shake your head, and either follow the idea or ignore it (PLEASE DO). It's all about having fun with silly suggestions.

## Example

- **What you were doing before**: "Browsing Reddit"
- **What you're going to do next**: "Going to a meeting"
- **How much free time you have now**: "15 minutes"

Generated Ideas:
1. Start a Reddit thread titled "Why do socks always get lost?"
2. Practice being a professional chair tester for the next 15 minutes.
3. Pretend to be a pirate and loudly announce that you need a "crow's nest."

## Contributing

Feel free to fork the repository, submit pull requests, or suggest features to make this project even more absurd. Just don't take it too seriously!

## License

This project is licensed under the MIT License.
