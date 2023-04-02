function maskify(cc) {
    if (cc.length <= 4) {
        return cc;
    }
    const lastFour = cc.slice(-4);
    const masked = "#".repeat(cc.length - 4) + lastFour;
    return masked;
}
  //by aziz ammar