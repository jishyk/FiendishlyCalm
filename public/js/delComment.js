// POSTs the technique and user comment from the Technique page to the History model
const deleteComment = async (event) => {
    
    if (event.target.classList.contains('delete-btn')) {
        const historyId = event.target.getAttribute('data-history-id');
    
        console.log("click!");
        console.log(historyId);

        const payload = {
            id: historyId,
        }

        console.log(payload);

        await fetch('/api/history', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        })
        .then(response => {
            if (response.ok) {
                window.location.href = '/api/history';
            } else {
                console.log("Redirect error.");
            }
        })
        .catch(error => {
            console.log("Response error.");
        })
    }
};

document.getElementById('history-items').addEventListener('click', deleteComment);