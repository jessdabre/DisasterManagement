function showDescs(disaster) {
    const descs = {
        one: [
            { text: 'Emergency Alerts', link: 'description1.html' },
            { text: 'Make a plan', link: 'description2.html' },
            { text: 'Get involved', link: 'description3.html' }
        ],
        two: [
            { text: 'Description 1', link: 'description1.html' },
            { text: 'Description 2', link: 'description2.html' },
            { text: 'Description 3', link: 'description3.html' }
        ],
        three: [
            { text: 'Description 1', link: 'description1.html' },
            { text: 'Description 2', link: 'description2.html' },
            { text: 'Description 3', link: 'description3.html' }
        ],
        four: [
            { text: 'Description 1', link: 'description1.html' },
            { text: 'Description 2', link: 'description2.html' },
            { text: 'Description 3', link: 'description3.html' }
        ],
        five: [
            { text: 'Description 1', link: 'description1.html' },
            { text: 'Description 2', link: 'description2.html' },
            { text: 'Description 3', link: 'description3.html' }
        ]
    };

    const descsList = document.getElementById('descs-list');
    const disasterTitle = document.getElementById('disaster-title');

    descsList.innerHTML = '';

    if (descs[disaster]) {
        descs[disaster].forEach(descItem => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = descItem.link;
            link.textContent = descItem.text;
            listItem.appendChild(link);
            descsList.appendChild(listItem);
        });
        disasterTitle.textContent = `Description in ${disaster.charAt(0).toUpperCase() + disaster.slice(1)}`;
    } else {
        disasterTitle.textContent = 'No desc available.';
    }
}
