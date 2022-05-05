
select stock_name, (sell.price - buy.price) as capital_gain_loss
from 
(select stock_name, sum(price) as price
from stocks
where operation = 'Buy'
group by stock_name) as buy
join 
(select stock_name, sum(price) as price
from stocks
where operation = 'Sell'
group by stock_name) as sell
using (stock_name);