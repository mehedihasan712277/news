export const date = () => {
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', options);
    return formattedDate;
}
