select user_id as buyer_id, join_date, ifnull(orders_in_2019, 0) as orders_in_2019
from users left join (select buyer_id, count(order_id) as orders_in_2019
from orders
where YEAR(order_date) = 2019
group by buyer_id) as o on user_id = o.buyer_id;