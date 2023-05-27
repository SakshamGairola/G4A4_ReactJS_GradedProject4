const avgRating = (ratings: any) => {
    let total = ratings?.reduce((a: number, b: number) => Math.floor(a) + Math.floor(b), 0);
    return (total / (ratings.length));
}

export { avgRating }