INSERT INTO house (name, address, city, state, zip, img, mortgage, rent)
values
($1, $2, $3, $4, $5, $6, $7, $8);

select * 
from house;