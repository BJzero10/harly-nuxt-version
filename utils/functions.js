export function removeDiacritics(str = "") {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function stringContain(str = "", section = "") {
    str = removeDiacritics(str.toLowerCase());
    section = removeDiacritics(section.toLowerCase());
    return str.includes(section);
}
