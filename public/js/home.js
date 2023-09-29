 const catButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/${id}`, {
            method: 'GET',
        });

        if
    }
 }