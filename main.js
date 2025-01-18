document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('btn');
    btn.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (!tabs[0].url.includes('tickettool.xyz')) {
                return;
            };
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: unlockPage
            });
        });
    });
});

function unlockPage() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.disabled && input.type === 'text') {
            input.disabled = false;
        };
    });
};
