-- 1. Reguła przeciw usuwaniu rekordu:

CREATE OR REPLACE RULE customers_del_protect_rule AS
    ON DELETE TO DO INSTEAD NOTHING;

