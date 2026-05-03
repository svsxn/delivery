insert into deliveries
    (amount, created_at)
select
    floor(pow(random(), 2) * (60 - 10 + 1) + 10), 
    now() - (random() * interval '7 days')
from generate_series(1, 50)