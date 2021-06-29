
export const yearsDiff_UntillNow = (dateString: any) => {
    // dateString = "dd/mm/yy"
    const [d, m, y] = dateString.split("/");
    let date1 = new Date(y, m, d);
    let date2 = new Date();
    let yearsDiff = date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
}