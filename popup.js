import { Buffer } from 'buffer';

function exportChat() {
    // Get the chat data from the user's local storage.
    const chatData = localStorage.getItem('chatData');

    // Convert the chat data to a binary string.
    const chatDataBuffer = new Buffer(chatData, 'utf8');

    // Create the file.
    const file = new File([chatDataBuffer], 'chat.txt');

    // Prompt the user to select a save location.
    const saveLocation = window.prompt('Select a save location:');

    // Save the file to the specified location.
    file.save({
        saveAs: true,
        fileName: saveLocation
    });
}

function importChat() {
    // Prompt the user to select a file to import.
    const fileInput = document.getElementById('fileInput');
    fileInput.click();

    // Read the chat data from the file.
    const file = fileInput.files[0];
    const chatData = file.text();

    // Write the chat data to the user's local storage.
    localStorage.setItem('chatData', chatData);
}

document.getElementById('exportButton').addEventListener('click', exportChat);
document.getElementById('importButton').addEventListener('click', importChat);
document.getElementById('saveLocationButton').addEventListener('click', () => {
    // Prompt the user to select a save location.
    const saveLocation = window.prompt('Select a save location:');
});