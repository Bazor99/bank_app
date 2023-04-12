<!DOCTYPE html>
<html>
<head>
    <title>wellsspringworldwide.com</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Welcome to Real Trust Bank</h1>

    <div id="chatbot-container">
        <div id="chatbot-messages"></div>
        <form id="chatbot-form" method="post">
            <input type="text" id="chatbot-input" name="chatbot-input" placeholder="Enter your message...">
            <button type="submit">Send</button>
        </form>
    </div>

    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $message = $_POST['chatbot-input'];
        $response = get_chatbot_response($message);
        echo "<script>addChatbotResponse('$response')</script>";
    }

    function get_chatbot_response($message) {
        // Your chatbot logic here
        return "This is a dummy response from the chatbot.";
    }
    ?>

    <script src="script.js"></script>

</body>
</html>
