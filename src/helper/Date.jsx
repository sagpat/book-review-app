const getFormattedDate = (dateString) => {
    return dateString.replace(/(\d{2})\-(\d{2})\-(\d{4})/, "$3/$2/$1");
}

export default getFormattedDate;