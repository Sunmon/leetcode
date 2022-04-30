SELECT DISTINCT a.id, CASE 
    WHEN a.p_id IS NULL THEN 'Root' 
    WHEN b.id IS NULL THEN 'Leaf'
    ELSE 'Inner' 
        END AS Type
FROM tree a
LEFT JOIN tree b ON a.id = b.p_id
ORDER BY a.id