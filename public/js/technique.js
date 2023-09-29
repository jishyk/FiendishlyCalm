// Assign HTML elements to variables
// const comment = document.querySelector('.comment-textarea');
// const techIdElement = document.getElementById('tech-id');
// const technique_id = techIdElement.dataset.id



const handleCommentSave = async () => {
    
    console.log("click!");
    const techIdElement = document.getElementById('tech-id');

    const payload = {
        comment: document.querySelector('.comment-textarea').value,
        technique_id: techIdElement.dataset.id
        }

        console.log(payload);

        await fetch('/api/history', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
};

document.getElementById('save-button').addEventListener('click', handleCommentSave);