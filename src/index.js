// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let money = currency;
    let exchange = {};

    function check(nom, cost) {
        if(money / cost >= 1) {
            exchange[nom] = Math.floor(money / cost);
            money -= Math.floor(money / cost) * cost;
        }
    };

    if(currency <= 0) return {};
    if(currency >= 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    while (money !== 0) {
        check('H', 50);
        check('Q', 25);
        check('D', 10);
        check('N', 5);
        check('P', 1);
    }
    return exchange;
}
