const getDay = (dateString) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];
    const date = new Date(dateString);
    const month = date.getMonth();
    const day = date.getDate();

    return `${day} ${months[month]}`;
}

module.exports = getDay;