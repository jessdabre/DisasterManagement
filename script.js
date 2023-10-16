function showDescs(disaster) {
    const descs = {
        Disasters and Emergencies: ['Emergency Alerts', 'Drought', 'Earthquake','Floods', 'Tsunamis'],
        Make a Plan: ['description 1', 'description 2', 'description 3'],
        Get Involved: ['description 1', 'description 2', 'description 3'],
        four: ['description 1', 'description 2', 'description 3'],
        five: ['description 1', 'description 2', 'description 3']
    };
    const descsList = document.getElementById('descs-list');
    const disasterTitle = document.getElementById('disaster-title');
    descsList.innerHTML = '';
    if (descs[disaster]) {
        descs[disaster].forEach(desc => {
            const listItem = document.createElement('li');
            listItem.textContent = desc;
            descsList.appendChild(listItem);
        });
        disasterTitle.textContent = `description in ${disaster.charAt(0).toUpperCase() + disaster.slice(1)}`;
    } else {
        disasterTitle.textContent = 'No desc available.';
    }
}
