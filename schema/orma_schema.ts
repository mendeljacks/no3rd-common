export const orma_schema = {
  "account_has_roles": {
    "$comment": "Specifies which accounts have which roles",
    "account_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "accounts": {
          "id": {}
        }
      }
    },
    "account_role_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "account_roles": {
          "id": {}
        }
      }
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "vendor_id": {
      "data_type": "int",
      "indexed": true,
      "character_count": 10,
      "references": {
        "vendors": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "comb_uniq_ahr",
        "is_unique": true,
        "fields": [
          "account_id",
          "account_role_id",
          "vendor_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_account_has_roles_dashboardAccounts1_idx",
        "is_unique": false,
        "fields": [
          "account_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_account_has_roles_account_roles1_idx",
        "is_unique": false,
        "fields": [
          "account_role_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_ahr_vendors_idx",
        "is_unique": false,
        "fields": [
          "vendor_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "account_permissions": {
    "$comment": "A list of different permissions that are available to be given to roles",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "label": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 450
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "account_role_has_permissions": {
    "$comment": "A list specifying which roles have which permissions",
    "account_permission_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "account_permissions": {
          "id": {}
        }
      }
    },
    "account_role_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "account_roles": {
          "id": {}
        }
      }
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "unique_arid_ap",
        "is_unique": true,
        "fields": [
          "account_role_id",
          "account_permission_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_account_role_has_permissions_account_permissions1_idx",
        "is_unique": false,
        "fields": [
          "account_permission_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_account_role_has_permissions_account_roles1_idx",
        "is_unique": false,
        "fields": [
          "account_role_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "account_roles": {
    "$comment": "A list of the different account roles available to be given to users",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "label": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 450
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "accounts": {
    "$comment": "A list of accounts registered (including vendors, admins and shoppers etc...)",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "email": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 50
    },
    "email_inbound_shipments": {
      "data_type": "tinyint",
      "character_count": 3,
      "default": "0"
    },
    "email_inventory": {
      "data_type": "tinyint",
      "character_count": 3
    },
    "email_orders": {
      "data_type": "tinyint",
      "character_count": 3,
      "default": "0"
    },
    "first_name": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 20
    },
    "hash": {
      "data_type": "varchar",
      "character_count": 1000
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "last_name": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 20
    },
    "phone": {
      "data_type": "varchar",
      "character_count": 30
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "vendor_id": {
      "data_type": "int",
      "indexed": true,
      "character_count": 10,
      "references": {
        "vendors": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "accountID_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "email_UNIQUE",
        "is_unique": true,
        "fields": [
          "email"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_dashboardAccounts_Vendors1_idx",
        "is_unique": false,
        "fields": [
          "vendor_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "attachments": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "integration_id": {
      "data_type": "int",
      "indexed": true,
      "character_count": 10,
      "references": {
        "integrations": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "url": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 1000
    },
    "vendor_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "vendors": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "url_UNIQUE",
        "is_unique": true,
        "fields": [
          "url"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_attachments_vendors",
        "is_unique": false,
        "fields": [
          "vendor_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_attachments_integrations_idx",
        "is_unique": false,
        "fields": [
          "integration_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "attributes": {
    "$comment": "A list of attributes available to describe products",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "description": {
      "data_type": "text",
      "character_count": 65535
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "label": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 250
    },
    "regex_validator": {
      "data_type": "varchar",
      "character_count": 500
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "tags": {
      "data_type": "varchar",
      "character_count": 200
    },
    "type": {
      "data_type": "varchar",
      "character_count": 45
    },
    "type_params": {
      "data_type": "text",
      "character_count": 65535
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "box_contents": {
    "$comment": "",
    "box_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "boxes": {
          "id": {}
        }
      }
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "order_item_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "order_items": {
          "id": {}
        }
      }
    },
    "quantity": {
      "data_type": "int",
      "not_null": true,
      "character_count": 10
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "uniq",
        "is_unique": true,
        "fields": [
          "box_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "b_oi_idx",
        "is_unique": false,
        "fields": [
          "order_item_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "boxes": {
    "$comment": "A list of shipping boxes created for fulfillments",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "height": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 4
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "is_shipped": {
      "data_type": "tinyint",
      "character_count": 3
    },
    "length": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 4
    },
    "name": {
      "data_type": "varchar",
      "character_count": 200
    },
    "order_id": {
      "data_type": "int",
      "indexed": true,
      "character_count": 10,
      "references": {
        "orders": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "truck": {
      "data_type": "varchar",
      "character_count": 200
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "weight": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 4
    },
    "width": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 4
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "box_order_idx",
        "is_unique": false,
        "fields": [
          "order_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "cashflows": {
    "$comment": "",
    "amount": {
      "data_type": "decimal",
      "not_null": true,
      "character_count": 10,
      "decimal_places": 2
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "currency_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "currencies": {
          "id": {}
        }
      }
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "paid": {
      "data_type": "tinyint",
      "character_count": 3,
      "default": "0"
    },
    "reason": {
      "data_type": "varchar",
      "character_count": 45
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "vendor_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "vendors": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "payfk2_idx",
        "is_unique": false,
        "fields": [
          "vendor_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "payfk3_idx",
        "is_unique": false,
        "fields": [
          "currency_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "categories": {
    "$comment": "A list of categories to categorize variants",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "image_url": {
      "data_type": "varchar",
      "character_count": 2000
    },
    "label": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 45
    },
    "parent_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "categories": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "visible": {
      "data_type": "tinyint",
      "character_count": 3,
      "default": "1"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "label_UNIQUE",
        "is_unique": true,
        "fields": [
          "label"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_categories_categories_idx",
        "is_unique": false,
        "fields": [
          "parent_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "category_has_attributes": {
    "$comment": "A list of which attributes are recommended for each category",
    "attribute_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "attributes": {
          "id": {}
        }
      }
    },
    "category_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "categories": {
          "id": {}
        }
      }
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "is_filter": {
      "data_type": "tinyint",
      "character_count": 3,
      "default": "0"
    },
    "is_inherited": {
      "data_type": "tinyint",
      "character_count": 3,
      "default": "1"
    },
    "is_key_attribute": {
      "data_type": "tinyint",
      "character_count": 3,
      "default": "0"
    },
    "is_option": {
      "data_type": "tinyint",
      "character_count": 3,
      "default": "0"
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "unique_category_id_attribute_id",
        "is_unique": true,
        "fields": [
          "category_id",
          "attribute_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_chf_categories_idx",
        "is_unique": false,
        "fields": [
          "category_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_chf_filters_idx",
        "is_unique": false,
        "fields": [
          "attribute_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "category_in_stores": {
    "$comment": "",
    "category_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "categories": {
          "id": {}
        }
      }
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "shopify_collection_id": {
      "data_type": "varchar",
      "indexed": true,
      "character_count": 45
    },
    "shopify_image_url": {
      "data_type": "varchar",
      "character_count": 450
    },
    "store_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "stores": {
          "store_id": {}
        }
      }
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "uniq_category_store",
        "is_unique": true,
        "fields": [
          "category_id",
          "store_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "shopify_collection_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "shopify_collection_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_c_stores_idx",
        "is_unique": false,
        "fields": [
          "store_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "countries": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10
    },
    "name": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 45
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "currencies": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "currency_code": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 45
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "currency_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "disbursement_adjustments": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "disbursement_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "disbursements": {
          "id": {}
        }
      }
    },
    "disbursement_pending_adjustment_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "disbursement_pending_adjustments": {
          "id": {}
        }
      }
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "disbursement_adjustment_pending_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "disbursement_pending_adjustment_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_disbursement_disbursement_adjustment_idx",
        "is_unique": false,
        "fields": [
          "disbursement_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "disbursement_order_item_cancellations": {
    "$comment": "A list to keep track of which cancelled order line items have been disbursed",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "disbursement_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "disbursements": {
          "id": {}
        }
      }
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "order_item_cancellation_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "order_item_cancellations": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "order_item_cancellation_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "order_item_cancellation_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_disbursement_colis_disbursements_idx",
        "is_unique": false,
        "fields": [
          "disbursement_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_order_item_cancellation_idx",
        "is_unique": false,
        "fields": [
          "order_item_cancellation_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "disbursement_order_items": {
    "$comment": "A list to keep track of which order line items have been disbursed",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "disbursement_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "disbursements": {
          "id": {}
        }
      }
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "order_item_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "order_items": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "order_line_item_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "order_item_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_dolis_disbursements_idx",
        "is_unique": false,
        "fields": [
          "disbursement_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_dolis_order_line_items_idx",
        "is_unique": false,
        "fields": [
          "order_item_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "disbursement_pending_adjustments": {
    "$comment": "",
    "amount": {
      "data_type": "decimal",
      "not_null": true,
      "character_count": 10,
      "decimal_places": 2
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "date": {
      "data_type": "datetime",
      "not_null": true
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "reason": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 500
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "store_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "stores": {
          "store_id": {}
        }
      }
    },
    "tax": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "vendor_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "vendors": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_dap_vendor_idx",
        "is_unique": false,
        "fields": [
          "vendor_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_dap_stores_idx",
        "is_unique": false,
        "fields": [
          "store_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "disbursement_private_labels": {
    "$comment": "A list to keep track of which private labels have been disbursed",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "disbursement_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "disbursements": {
          "id": {}
        }
      }
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "private_label_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "shipping_labels": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "private_label_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "private_label_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_dpl_disbursements_idx",
        "is_unique": false,
        "fields": [
          "disbursement_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_dpl_private_labels_idx",
        "is_unique": false,
        "fields": [
          "private_label_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "disbursement_recalls": {
    "$comment": "A list to keep track of which recalls have been disbursed",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "disbursement_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "disbursements": {
          "id": {}
        }
      }
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "recall_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "recalls": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "recall_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "recall_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_dr_recall_idx",
        "is_unique": false,
        "fields": [
          "recall_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_dr_disbursement_idx",
        "is_unique": false,
        "fields": [
          "disbursement_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "disbursement_refunds": {
    "$comment": "A list to keep track of which refunds have been disbursed",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "disbursement_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "disbursements": {
          "id": {}
        }
      }
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "refund_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "refunds": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_drefunds_disbursement_idx",
        "is_unique": false,
        "fields": [
          "disbursement_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_dr_r_idx",
        "is_unique": false,
        "fields": [
          "refund_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "disbursement_relinquishes": {
    "$comment": "A list to keep track of which relinquishes have been disbursed",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "disbursement_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "disbursements": {
          "id": {}
        }
      }
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "relinquish_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "relinquishes": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "relinquish_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "relinquish_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_drelinquishes_disbursement_idx",
        "is_unique": false,
        "fields": [
          "disbursement_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "disbursement_storage_fees": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "disbursement_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "disbursements": {
          "id": {}
        }
      }
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "storage_fee_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "storage_fees": {
          "id": {}
        }
      }
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "sf_d_idx",
        "is_unique": false,
        "fields": [
          "disbursement_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "dsfsf_idx",
        "is_unique": false,
        "fields": [
          "storage_fee_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "disbursements": {
    "$comment": "A list of disbursements recording transactions that No3rd pays the Vendors",
    "amount": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "store_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "stores": {
          "store_id": {}
        }
      }
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "vendor_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "vendors": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_disbursements_vendors_idx",
        "is_unique": false,
        "fields": [
          "vendor_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_disbursements_stores_idx",
        "is_unique": false,
        "fields": [
          "store_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "fulfillment_marketplace_info": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "fulfillment_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "order_item_fulfillments": {
          "id": {}
        }
      }
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "shopify_fulfillment_id": {
      "data_type": "bigint",
      "not_null": true,
      "indexed": true,
      "character_count": 19
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "shopify_fulfillment_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "shopify_fulfillment_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fulfillment_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "fulfillment_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "image_in_stores": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "image_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "images": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "shopify_image_id": {
      "data_type": "varchar",
      "character_count": 45
    },
    "store_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "stores": {
          "store_id": {}
        }
      }
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "combo_unique_store_image",
        "is_unique": true,
        "fields": [
          "image_id",
          "store_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "store_id",
        "is_unique": false,
        "fields": [
          "store_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "images": {
    "$comment": "Pictures of the variants for shoppers to see",
    "bucket_url": {
      "data_type": "varchar",
      "character_count": 2000
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "original_url": {
      "data_type": "varchar",
      "character_count": 2000
    },
    "position": {
      "data_type": "int",
      "character_count": 10
    },
    "product_id": {
      "data_type": "int",
      "character_count": 10
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "variant_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "variants": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_images_variant_idx",
        "is_unique": false,
        "fields": [
          "variant_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "integration_goflows": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "default_goflow_warehouse_id": {
      "data_type": "varchar",
      "character_count": 45
    },
    "default_goflow_warehouse_name": {
      "data_type": "varchar",
      "character_count": 45
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "integration_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "integrations": {
          "id": {}
        }
      }
    },
    "password": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 200
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "subdomain": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 200
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "user_name": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 200
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "integration_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "integration_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "ig_i_idx",
        "is_unique": false,
        "fields": [
          "integration_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "integration_sellerclouds": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "default_sellercloud_warehouse_id": {
      "data_type": "varchar",
      "character_count": 45
    },
    "default_sellercloud_warehouse_name": {
      "data_type": "varchar",
      "character_count": 45
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "integration_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "integrations": {
          "id": {}
        }
      }
    },
    "password": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 200
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "server_id": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 200
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "user_name": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 200
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_is_i_idx",
        "is_unique": false,
        "fields": [
          "integration_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "integration_shipstations": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "integration_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "integrations": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "shipstation_key": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 45
    },
    "shipstation_secret": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 45
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "integration_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "integration_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "integration_shopifys": {
    "$comment": "",
    "api_key": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "integration_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "integrations": {
          "id": {}
        }
      }
    },
    "password": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "shop_name": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "integration_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "integration_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "integration_ups": {
    "$comment": "",
    "access_key": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 200
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "integration_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "integrations": {
          "id": {}
        }
      }
    },
    "password": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 200
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "username": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 200
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "username_UNIQUE",
        "is_unique": true,
        "fields": [
          "username"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_inups_inte_idx",
        "is_unique": false,
        "fields": [
          "integration_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "integration_walmart_cas": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "integration_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "integrations": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "walmart_channel": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 255
    },
    "walmart_consumer": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 255
    },
    "walmart_secret": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 1000
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_iwc_int_idx",
        "is_unique": false,
        "fields": [
          "integration_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "integrations": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "name": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 45
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "vendor_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "vendors": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "integration_vendor_idx",
        "is_unique": false,
        "fields": [
          "vendor_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "inventory_adjustments": {
    "$comment": "A list of inventory adjustments made for receiving, moving, fulfilling etc...",
    "adjusted_by": {
      "data_type": "int",
      "indexed": true,
      "character_count": 10,
      "references": {
        "accounts": {
          "id": {}
        }
      }
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "quantity": {
      "data_type": "int",
      "not_null": true,
      "character_count": 10
    },
    "reason": {
      "data_type": "longtext",
      "character_count": 4294967295
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "shelf_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "shelves": {
          "id": {}
        }
      }
    },
    "store_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "stores": {
          "store_id": {}
        }
      }
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "variant_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "variants": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_ia_stores_idx",
        "is_unique": false,
        "fields": [
          "store_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_ia_variants_idx",
        "is_unique": false,
        "fields": [
          "variant_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_ia_shelves_idx",
        "is_unique": false,
        "fields": [
          "shelf_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_ia_accounts_idx",
        "is_unique": false,
        "fields": [
          "adjusted_by"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "jobs": {
    "$comment": "",
    "args": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 2000
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "err_msg": {
      "data_type": "mediumtext",
      "character_count": 16777215
    },
    "failed_attempts": {
      "data_type": "int",
      "not_null": true,
      "character_count": 10
    },
    "fn": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 200
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "last_run": {
      "data_type": "timestamp"
    },
    "priority": {
      "data_type": "int",
      "not_null": true,
      "character_count": 10
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "rrule": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 512
    },
    "status": {
      "data_type": "enum",
      "not_null": true,
      "character_count": 7
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "vendor_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "vendors": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_jobs_1_idx",
        "is_unique": false,
        "fields": [
          "vendor_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "order_3pl_info": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "fba_url": {
      "data_type": "varchar",
      "character_count": 230
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "order_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "orders": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "ups_url": {
      "data_type": "varchar",
      "character_count": 230
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "order_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "order_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_3pli_o_idx",
        "is_unique": false,
        "fields": [
          "order_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "order_item_3pl_info": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "order_item_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "order_items": {
          "id": {}
        }
      }
    },
    "picking_fee": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "picking_fee_tax": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "shipping_fee": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "shipping_fee_tax": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "order_line_item_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "order_item_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_3pl_oli_idx",
        "is_unique": false,
        "fields": [
          "order_item_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "order_item_cancellations": {
    "$comment": "A list of order line items that have been cancelled",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "order_item_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "order_items": {
          "id": {}
        }
      }
    },
    "quantity": {
      "data_type": "int",
      "not_null": true,
      "character_count": 10
    },
    "reason": {
      "data_type": "varchar",
      "character_count": 1000
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "oli_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "order_item_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "order_item_fulfillments": {
    "$comment": "The record of which items are fulfilled in a fulfillment",
    "box_id": {
      "data_type": "int",
      "indexed": true,
      "character_count": 10,
      "references": {
        "boxes": {
          "id": {}
        }
      }
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "inventory_adjustment_id": {
      "data_type": "int",
      "indexed": true,
      "character_count": 10,
      "references": {
        "inventory_adjustments": {
          "id": {}
        }
      }
    },
    "order_item_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "order_items": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fli_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "inventory_adjustment_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "inventory_adjustment_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_fli_oli_idx",
        "is_unique": false,
        "fields": [
          "order_item_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_fli_box_idx",
        "is_unique": false,
        "fields": [
          "box_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_fli_ia_idx",
        "is_unique": false,
        "fields": [
          "inventory_adjustment_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "order_item_marketplace_info": {
    "$comment": "",
    "commission_fee": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "credit_card_fee": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "gst_customer_rate": {
      "data_type": "float",
      "character_count": 12
    },
    "hst_customer_rate": {
      "data_type": "float",
      "character_count": 12
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "order_item_id": {
      "data_type": "int",
      "indexed": true,
      "character_count": 10,
      "references": {
        "order_items": {
          "id": {}
        }
      }
    },
    "price": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "pst_customer_rate": {
      "data_type": "float",
      "character_count": 12
    },
    "qst_customer_rate": {
      "data_type": "float",
      "character_count": 12
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 20
    },
    "shipping_fee": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2,
      "default": "0.00"
    },
    "shopify_order_item_id": {
      "data_type": "bigint",
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "wam": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "wam_tax": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_oli_olimi_idx",
        "is_unique": false,
        "fields": [
          "order_item_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "order_item_returns": {
    "$comment": "The details of which items are in a return",
    "comment_no3rd": {
      "data_type": "mediumtext",
      "character_count": 16777215
    },
    "comment_shopper": {
      "data_type": "mediumtext",
      "character_count": 16777215
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "order_item_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "order_items": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "return_request_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "return_requests": {
          "id": {}
        }
      }
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_rli_oli_idx",
        "is_unique": false,
        "fields": [
          "order_item_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_rli_return_requests_idx",
        "is_unique": false,
        "fields": [
          "return_request_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "order_items": {
    "$comment": "A list of how many of each variant are on each order",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "order_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "orders": {
          "id": {}
        }
      }
    },
    "quantity": {
      "data_type": "int",
      "not_null": true,
      "character_count": 10
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "variant_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "variants": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_order_line_items_variants_idx",
        "is_unique": false,
        "fields": [
          "variant_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_order_line_items_orders_idx",
        "is_unique": false,
        "fields": [
          "order_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "order_marketplace_info": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "email": {
      "data_type": "varchar",
      "character_count": 500
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "order_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "orders": {
          "id": {}
        }
      }
    },
    "order_status_url": {
      "data_type": "varchar",
      "character_count": 1000
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "shopify_created_at": {
      "data_type": "varchar",
      "character_count": 500
    },
    "shopify_order_id": {
      "data_type": "bigint",
      "indexed": true,
      "character_count": 20
    },
    "shopify_updated_at": {
      "data_type": "varchar",
      "character_count": 500
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "order_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "order_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "ShopifyOrderID_UNIQUE",
        "is_unique": true,
        "fields": [
          "shopify_order_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_omi_o_idx",
        "is_unique": false,
        "fields": [
          "order_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "orders": {
    "$comment": "A list of orders shoppers make from the store",
    "address": {
      "data_type": "varchar",
      "character_count": 300
    },
    "address2": {
      "data_type": "varchar",
      "character_count": 300
    },
    "city": {
      "data_type": "varchar",
      "character_count": 45
    },
    "country": {
      "data_type": "varchar",
      "character_count": 45
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "first_name": {
      "data_type": "varchar",
      "character_count": 45
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "integration_id": {
      "data_type": "int",
      "indexed": true,
      "character_count": 10,
      "references": {
        "integrations": {
          "id": {}
        }
      }
    },
    "is_problem": {
      "data_type": "tinyint",
      "not_null": true,
      "character_count": 3,
      "default": "0"
    },
    "last_name": {
      "data_type": "varchar",
      "character_count": 45
    },
    "name": {
      "data_type": "varchar",
      "indexed": true,
      "character_count": 45
    },
    "note": {
      "data_type": "varchar",
      "character_count": 600
    },
    "open": {
      "data_type": "tinyint",
      "not_null": true,
      "character_count": 3,
      "default": "1"
    },
    "phone": {
      "data_type": "varchar",
      "character_count": 45
    },
    "problem_note": {
      "data_type": "varchar",
      "character_count": 600
    },
    "province": {
      "data_type": "varchar",
      "character_count": 45
    },
    "province_id": {
      "data_type": "int",
      "indexed": true,
      "character_count": 10,
      "references": {
        "provinces": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "store_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "stores": {
          "store_id": {}
        }
      }
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "zip": {
      "data_type": "varchar",
      "character_count": 45
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "name_UNIQUE",
        "is_unique": true,
        "fields": [
          "name"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_orders_stores_idx",
        "is_unique": false,
        "fields": [
          "store_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_orders_provinces_idx",
        "is_unique": false,
        "fields": [
          "province_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_integration_idx",
        "is_unique": false,
        "fields": [
          "integration_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "payments": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "from_cashflow_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "cashflows": {
          "id": {}
        }
      }
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "to_cashflow_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "cashflows": {
          "id": {}
        }
      }
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_payments_cashflows_idx",
        "is_unique": false,
        "fields": [
          "from_cashflow_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_payments_to_idx",
        "is_unique": false,
        "fields": [
          "to_cashflow_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "product_in_stores": {
    "$comment": "Details about the product specific to a store",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "handle": {
      "data_type": "varchar",
      "character_count": 500
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "product_id": {
      "data_type": "int",
      "indexed": true,
      "character_count": 10,
      "references": {
        "products": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "shopify_product_id": {
      "data_type": "bigint",
      "indexed": true,
      "character_count": 20
    },
    "store_id": {
      "data_type": "int",
      "indexed": true,
      "character_count": 10,
      "references": {
        "stores": {
          "store_id": {}
        }
      }
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "ShopifyProductID_UNIQUE",
        "is_unique": true,
        "fields": [
          "shopify_product_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "unique_product_id_store_id",
        "is_unique": true,
        "fields": [
          "product_id",
          "store_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_pis_store_idx",
        "is_unique": false,
        "fields": [
          "store_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_pis_product_idx",
        "is_unique": false,
        "fields": [
          "product_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "products": {
    "$comment": "Collections of variants which will appear in the same listing",
    "body_html": {
      "data_type": "text",
      "character_count": 65535,
      "comment": "html"
    },
    "brand": {
      "data_type": "varchar",
      "character_count": 45
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "title": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 800
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "vendor_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "vendors": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_products_vendors_idx",
        "is_unique": false,
        "fields": [
          "vendor_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "provinces": {
    "$comment": "",
    "country_id": {
      "data_type": "int",
      "indexed": true,
      "character_count": 10,
      "references": {
        "countries": {
          "id": {}
        }
      }
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10
    },
    "name": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 45
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "tax_rate": {
      "data_type": "decimal",
      "not_null": true,
      "character_count": 10,
      "decimal_places": 5
    },
    "two_letter_code": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 45
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "name_UNIQUE",
        "is_unique": true,
        "fields": [
          "name"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "two_letter_code_UNIQUE",
        "is_unique": true,
        "fields": [
          "two_letter_code"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_p_c_idx",
        "is_unique": false,
        "fields": [
          "country_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "recalls": {
    "$comment": "A list recording which returns a vendor wanted to recall",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "order_item_return_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "order_item_returns": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "rli_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "order_item_return_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "refunds": {
    "$comment": "A list of refunds made to the customer for their items",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "order_item_return_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "order_item_returns": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "rli_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "order_item_return_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "relinquishes": {
    "$comment": "A list recording which returns the vendor wanted to let no3rd keep for a percentage of the original list price",
    "amount": {
      "data_type": "decimal",
      "not_null": true,
      "character_count": 10,
      "decimal_places": 2
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "order_item_return_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "order_item_returns": {
          "id": {}
        }
      }
    },
    "rate": {
      "data_type": "float",
      "character_count": 12
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "tax": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "rli_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "order_item_return_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "return_requests": {
    "$comment": "Return requests that the customer made",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "package_received_date": {
      "data_type": "datetime"
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "rm_approved_date": {
      "data_type": "datetime"
    },
    "rm_id": {
      "data_type": "varchar",
      "indexed": true,
      "character_count": 45
    },
    "rm_request_date": {
      "data_type": "datetime"
    },
    "tracking_number": {
      "data_type": "bigint",
      "character_count": 19
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "rm_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "rm_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "shelves": {
    "$comment": "A list of shelves that exist in each warehouse",
    "barcode": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 50
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "warehouse_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "warehouses": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "barcode_UNIQUE",
        "is_unique": true,
        "fields": [
          "barcode"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_shelves_warehouses_idx",
        "is_unique": false,
        "fields": [
          "warehouse_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "shipment_items": {
    "$comment": "A list of variants and quantities that are sent in each shipment",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "quantity": {
      "data_type": "int",
      "not_null": true,
      "character_count": 10
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "shipment_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "shipments": {
          "id": {}
        }
      }
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "variant_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "variants": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "line_item_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "combo_si_s_v",
        "is_unique": true,
        "fields": [
          "shipment_id",
          "variant_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_sli_s_idx",
        "is_unique": false,
        "fields": [
          "shipment_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_sli_variant_idx",
        "is_unique": false,
        "fields": [
          "variant_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "shipment_items_received": {
    "$comment": "A list recording which items have been received from a shipment",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "inventory_adjustment_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "inventory_adjustments": {
          "id": {}
        }
      }
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "shipment_item_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "shipment_items": {
          "id": {}
        }
      }
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "inventory_adjustment_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "inventory_adjustment_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_slir_sli_idx",
        "is_unique": false,
        "fields": [
          "shipment_item_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_slir_ia_idx",
        "is_unique": false,
        "fields": [
          "inventory_adjustment_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "shipments": {
    "$comment": "A notice that a vendor intends to send a shipment to a no3rd warehouse",
    "bol": {
      "data_type": "varchar",
      "character_count": 200
    },
    "box_count": {
      "data_type": "int",
      "character_count": 10
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "is_problem": {
      "data_type": "tinyint",
      "not_null": true,
      "character_count": 3,
      "default": "0"
    },
    "name": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 45
    },
    "notes": {
      "data_type": "varchar",
      "character_count": 1000
    },
    "open": {
      "data_type": "tinyint",
      "not_null": true,
      "character_count": 3,
      "default": "1"
    },
    "pallet_count": {
      "data_type": "int",
      "character_count": 10
    },
    "po_number": {
      "data_type": "varchar",
      "character_count": 200
    },
    "problem_note": {
      "data_type": "varchar",
      "character_count": 600
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "store_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "stores": {
          "store_id": {}
        }
      }
    },
    "total_weight": {
      "data_type": "float",
      "character_count": 12
    },
    "tracking": {
      "data_type": "varchar",
      "character_count": 200
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "vendor_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "vendors": {
          "id": {}
        }
      }
    },
    "warehouse_id_dest": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "warehouses": {
          "id": {}
        }
      }
    },
    "warehouse_id_origin": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "warehouses": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "uq_name_vid",
        "is_unique": true,
        "fields": [
          "vendor_id",
          "name"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "name_UNIQUE",
        "is_unique": true,
        "fields": [
          "name"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_shipments_vendors_idx",
        "is_unique": false,
        "fields": [
          "vendor_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_shipments_stores_idx",
        "is_unique": false,
        "fields": [
          "store_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_shipments_warehouse_dest_idx",
        "is_unique": false,
        "fields": [
          "warehouse_id_dest"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_shipments_warehouse_origin_idx",
        "is_unique": false,
        "fields": [
          "warehouse_id_origin"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "shipping_labels": {
    "$comment": "A list of labels created for various fulfillments or private labels",
    "box_id": {
      "data_type": "int",
      "indexed": true,
      "character_count": 10,
      "references": {
        "boxes": {
          "id": {}
        }
      }
    },
    "carrier": {
      "data_type": "varchar",
      "character_count": 100
    },
    "cost": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "pdf_url": {
      "data_type": "varchar",
      "character_count": 450
    },
    "private_label_vendor_id": {
      "data_type": "int",
      "character_count": 10
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "service_type": {
      "data_type": "varchar",
      "character_count": 45
    },
    "shippo_rate_id": {
      "data_type": "varchar",
      "character_count": 45
    },
    "shippo_transaction_id": {
      "data_type": "varchar",
      "character_count": 45
    },
    "shipstation_shipment_id": {
      "data_type": "varchar",
      "character_count": 45
    },
    "tracking_number": {
      "data_type": "varchar",
      "indexed": true,
      "character_count": 450
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "tracking_number_UNIQUE",
        "is_unique": true,
        "fields": [
          "tracking_number"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_sl_boxes_idx",
        "is_unique": false,
        "fields": [
          "box_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "storage_fees": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "date": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "fee_per_pallet": {
      "data_type": "decimal",
      "not_null": true,
      "character_count": 10,
      "decimal_places": 2
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "tax_rate": {
      "data_type": "decimal",
      "not_null": true,
      "character_count": 10,
      "decimal_places": 4
    },
    "units": {
      "data_type": "int",
      "not_null": true,
      "character_count": 10
    },
    "units_per_pallet": {
      "data_type": "int",
      "not_null": true,
      "character_count": 10
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "variant_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "variants": {
          "id": {}
        }
      }
    },
    "warehouse_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "warehouses": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "uq_dt_var_war_storage_fee",
        "is_unique": true,
        "fields": [
          "variant_id",
          "warehouse_id",
          "date"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_sf_variants_idx",
        "is_unique": false,
        "fields": [
          "variant_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_sf_warehouses_idx",
        "is_unique": false,
        "fields": [
          "warehouse_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "stores": {
    "$comment": "A list of sales channels where customers can buy things",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "image_url": {
      "data_type": "longtext",
      "character_count": 4294967295
    },
    "location": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 45
    },
    "name": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 45
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "shopify_location_id_merchant": {
      "data_type": "bigint",
      "indexed": true,
      "character_count": 20
    },
    "shopify_location_id_no3rd": {
      "data_type": "bigint",
      "indexed": true,
      "character_count": 20
    },
    "store_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "url": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "store_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "store_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "store_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "name_UNIQUE",
        "is_unique": true,
        "fields": [
          "name"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "shopify_location_id_merchant_UNIQUE",
        "is_unique": true,
        "fields": [
          "shopify_location_id_merchant"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "shopify_location_id_no3rd_UNIQUE",
        "is_unique": true,
        "fields": [
          "shopify_location_id_no3rd"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "todos": {
    "$comment": "",
    "complete": {
      "data_type": "tinyint",
      "character_count": 3
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "created_by": {
      "data_type": "varchar",
      "character_count": 45
    },
    "description": {
      "data_type": "varchar",
      "character_count": 500
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "tag": {
      "data_type": "varchar",
      "indexed": true,
      "character_count": 500
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "combo_uniq",
        "is_unique": true,
        "fields": [
          "tag",
          "description"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "tracking_info": {
    "$comment": "",
    "attachment_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "attachments": {
          "id": {}
        }
      }
    },
    "carrier": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 45
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "service_type": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 45
    },
    "tracking_number": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 450
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "tracking_number_UNIQUE",
        "is_unique": true,
        "fields": [
          "tracking_number"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_tracking_attachment_idx",
        "is_unique": false,
        "fields": [
          "attachment_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "ups_label_info": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "package.dimensions.height": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "package.dimensions.length": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "package.dimensions.unit_of_measurement.code": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "package.dimensions.width": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "package.package_weight.unit_of_measurement.code": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "package.package_weight.weight": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "package.packaging_type.code": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "service.code": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "ship_from.address.address_line": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "ship_from.address.city": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "ship_from.address.country_code": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "ship_from.address.postal_code": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "ship_from.address.state_province_code": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "ship_from.name": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "ship_to.address.address_line": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "ship_to.address.city": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "ship_to.address.country_code": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "ship_to.address.postal_code": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "ship_to.address.state_province_code": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "ship_to.name": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "shipment_total_weight.unit_of_measurement.code": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "shipment_total_weight.weight": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "shipper.address.address_line": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "shipper.address.city": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "shipper.address.country_code": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "shipper.address.postal_code": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "shipper.address.state_province_code": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 100
    },
    "shipper.name": {
      "data_type": "varchar",
      "character_count": 100
    },
    "shipper.shipper_number": {
      "data_type": "varchar",
      "character_count": 100
    },
    "tracking_info_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "tracking_info": {
          "id": {}
        }
      }
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "tracking_info_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "tracking_info_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "variant_has_attributes": {
    "$comment": "A list of which attributes are recommended to fill in for each variant",
    "attribute_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "attributes": {
          "id": {}
        }
      }
    },
    "attribute_value": {
      "data_type": "varchar",
      "character_count": 250
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "variant_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "variants": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "unique_variant_id_attribute_id",
        "is_unique": true,
        "fields": [
          "variant_id",
          "attribute_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_vhf_variants_idx",
        "is_unique": false,
        "fields": [
          "variant_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_vhf_filters_idx",
        "is_unique": false,
        "fields": [
          "attribute_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "variant_has_categories": {
    "$comment": "A list of which categories a variant should appear in",
    "category_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "categories": {
          "id": {}
        }
      }
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "is_hero": {
      "data_type": "tinyint",
      "character_count": 3
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "variant_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "variants": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "unique_variant_id_category_id",
        "is_unique": true,
        "fields": [
          "variant_id",
          "category_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "is_hero_variant_id_unique",
        "is_unique": true,
        "fields": [
          "variant_id",
          "is_hero"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_vhc_variants_idx",
        "is_unique": false,
        "fields": [
          "variant_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_vhc_categories_idx",
        "is_unique": false,
        "fields": [
          "category_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "variant_in_goflows": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "goflow_item_id": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 45
    },
    "goflow_item_number": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 45
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "integration_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "integrations": {
          "id": {}
        }
      }
    },
    "is_active": {
      "data_type": "tinyint",
      "not_null": true,
      "character_count": 3,
      "default": "0"
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "variant_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "variants": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "vig_combo_uniq",
        "is_unique": true,
        "fields": [
          "integration_id",
          "variant_id",
          "goflow_item_id",
          "goflow_item_number"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_vig_i_idx",
        "is_unique": false,
        "fields": [
          "integration_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_vig_v_idx",
        "is_unique": false,
        "fields": [
          "variant_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "variant_in_sellerclouds": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "integration_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "integrations": {
          "id": {}
        }
      }
    },
    "is_active": {
      "data_type": "tinyint",
      "not_null": true,
      "character_count": 3,
      "default": "0"
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "sellercloud_id": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 45
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "variant_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "variants": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "vis_combo",
        "is_unique": true,
        "fields": [
          "integration_id",
          "variant_id",
          "sellercloud_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_vis_v_idx",
        "is_unique": false,
        "fields": [
          "variant_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "variant_in_stores": {
    "$comment": "A list of store specific information recorded for a variant such as price and wam",
    "amazon_price": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "amazon_scraper_message": {
      "data_type": "varchar",
      "character_count": 1000
    },
    "available_in_store": {
      "data_type": "tinyint",
      "character_count": 3,
      "default": "1"
    },
    "commission_fee": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "commission_rate": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 4
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "credit_card_fee": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "price": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "relinquish_rate": {
      "data_type": "float",
      "character_count": 12
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "shipping_fee": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "shopify_inventory_item_id": {
      "data_type": "varchar",
      "character_count": 45
    },
    "shopify_variant_id": {
      "data_type": "bigint",
      "character_count": 20
    },
    "store_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "stores": {
          "store_id": {}
        }
      }
    },
    "strict_price": {
      "data_type": "tinyint",
      "character_count": 3,
      "default": "0"
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "variant_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "variants": {
          "id": {}
        }
      }
    },
    "wam": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "unique_variant_id_store_id",
        "is_unique": true,
        "fields": [
          "variant_id",
          "store_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_vins_variants_idx",
        "is_unique": false,
        "fields": [
          "variant_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_vins_stores_idx",
        "is_unique": false,
        "fields": [
          "store_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "variant_in_walmart_cas": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "integration_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "integrations": {
          "id": {}
        }
      }
    },
    "is_active": {
      "data_type": "tinyint",
      "not_null": true,
      "character_count": 3,
      "default": "0"
    },
    "last_synced": {
      "data_type": "timestamp"
    },
    "price": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "promo_price": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "variant_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "variants": {
          "id": {}
        }
      }
    },
    "walmart_sku": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 45
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_viwc_combo",
        "is_unique": true,
        "fields": [
          "integration_id",
          "variant_id",
          "walmart_sku"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_viwc_v_idx",
        "is_unique": false,
        "fields": [
          "variant_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_viwc_inte_idx",
        "is_unique": false,
        "fields": [
          "integration_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "variants": {
    "$comment": "A specific item that can be purchased eg red iphone 8",
    "asin": {
      "data_type": "varchar",
      "indexed": true,
      "character_count": 100
    },
    "barcode": {
      "data_type": "varchar",
      "indexed": true,
      "character_count": 45
    },
    "carton_height": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "carton_length": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "carton_weight": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 3
    },
    "carton_width": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "height": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "length": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "product_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "products": {
          "id": {}
        }
      }
    },
    "receiving_instructions": {
      "data_type": "varchar",
      "character_count": 200
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "sku": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 45
    },
    "units_per_carton": {
      "data_type": "int",
      "character_count": 10,
      "default": "1"
    },
    "units_per_pallet": {
      "data_type": "int",
      "not_null": true,
      "character_count": 10,
      "default": "1"
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "weight": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 3
    },
    "width": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "sku_UNIQUE",
        "is_unique": true,
        "fields": [
          "sku"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "barcode_UNIQUE",
        "is_unique": true,
        "fields": [
          "barcode"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "asin_UNIQUE",
        "is_unique": true,
        "fields": [
          "asin"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_variants_products_idx",
        "is_unique": false,
        "fields": [
          "product_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "vendor_has_accounts": {
    "$comment": "",
    "account_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "accounts": {
          "id": {}
        }
      }
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "vendor_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "vendors": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "vhc_combo",
        "is_unique": true,
        "fields": [
          "vendor_id",
          "account_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "vha_vendor_id_idx",
        "is_unique": false,
        "fields": [
          "vendor_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "vhac_account_id_idx",
        "is_unique": false,
        "fields": [
          "account_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "vendors": {
    "$comment": "A list of vendors approved to sell on the no3rd marketplace",
    "account_number": {
      "data_type": "varchar",
      "character_count": 30
    },
    "auto_relinquish": {
      "data_type": "tinyint",
      "not_null": true,
      "character_count": 3,
      "default": "0"
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "default_commission_rate": {
      "data_type": "decimal",
      "not_null": true,
      "character_count": 10,
      "decimal_places": 2
    },
    "default_picking_fee": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "default_relinquish_rate": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "default_storage_fee": {
      "data_type": "decimal",
      "character_count": 10,
      "decimal_places": 2
    },
    "gst_number": {
      "data_type": "varchar",
      "character_count": 45
    },
    "hst_number": {
      "data_type": "varchar",
      "character_count": 45
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "institution_number": {
      "data_type": "varchar",
      "character_count": 30
    },
    "pst_number": {
      "data_type": "varchar",
      "character_count": 45
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "tax_province_id": {
      "data_type": "int",
      "indexed": true,
      "character_count": 10,
      "references": {
        "provinces": {
          "id": {}
        }
      }
    },
    "transit_number": {
      "data_type": "varchar",
      "character_count": 30
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "vendor_name": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 50
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "vendorName_UNIQUE",
        "is_unique": true,
        "fields": [
          "vendor_name"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_vendors_provinces_idx",
        "is_unique": false,
        "fields": [
          "tax_province_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "walmart_ca_attributes": {
    "$comment": "",
    "attribute_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "attributes": {
          "id": {}
        }
      }
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "description": {
      "data_type": "varchar",
      "character_count": 2000
    },
    "display_name": {
      "data_type": "varchar",
      "character_count": 50
    },
    "enumeration": {
      "data_type": "varchar",
      "character_count": 2000,
      "comment": "JSON stringified values that the attribute can take"
    },
    "group_name": {
      "data_type": "varchar",
      "character_count": 50
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "max_length": {
      "data_type": "int",
      "character_count": 10
    },
    "min_length": {
      "data_type": "int",
      "character_count": 10
    },
    "name": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 50
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "simple_type": {
      "data_type": "varchar",
      "character_count": 45
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "uq_aiwc_combo",
        "is_unique": true,
        "fields": [
          "attribute_id",
          "name"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "walmart_ca_categories": {
    "$comment": "",
    "category": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 50
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "subcategory": {
      "data_type": "varchar",
      "not_null": true,
      "character_count": 50
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "uq_wcc_category",
        "is_unique": true,
        "fields": [
          "category",
          "subcategory"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "walmart_ca_category_has_attributes": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "required_level": {
      "data_type": "varchar",
      "character_count": 20
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "walmart_ca_attribute_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "walmart_ca_attributes": {
          "id": {}
        }
      }
    },
    "walmart_ca_category_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "walmart_ca_categories": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "uq_wccha_category_attribute",
        "is_unique": true,
        "fields": [
          "walmart_ca_category_id",
          "walmart_ca_attribute_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_wccha_attributes_idx",
        "is_unique": false,
        "fields": [
          "walmart_ca_attribute_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "walmart_ca_variant_has_categories": {
    "$comment": "",
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "variant_in_walmart_ca_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "variant_in_walmart_cas": {
          "id": {}
        }
      }
    },
    "walmart_ca_category_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "walmart_ca_categories": {
          "id": {}
        }
      }
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "uq_variant_category",
        "is_unique": true,
        "fields": [
          "variant_in_walmart_ca_id",
          "walmart_ca_category_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_ciwc_walmart_categories_idx",
        "is_unique": false,
        "fields": [
          "walmart_ca_category_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_ciwc_variant_idx",
        "is_unique": false,
        "fields": [
          "variant_in_walmart_ca_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  },
  "warehouses": {
    "$comment": "A list of vendor and no3rd warehouses",
    "address1": {
      "data_type": "varchar",
      "character_count": 450
    },
    "address2": {
      "data_type": "varchar",
      "character_count": 450
    },
    "city": {
      "data_type": "varchar",
      "character_count": 45
    },
    "country_code": {
      "data_type": "enum",
      "character_count": 2
    },
    "country_name": {
      "data_type": "varchar",
      "character_count": 45
    },
    "created_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "primary_key": true,
      "character_count": 10,
      "auto_increment": true
    },
    "is_no3rd_warehouse": {
      "data_type": "tinyint",
      "not_null": true,
      "character_count": 3,
      "default": "0"
    },
    "name": {
      "data_type": "varchar",
      "character_count": 45
    },
    "phone": {
      "data_type": "varchar",
      "character_count": 45
    },
    "province_id": {
      "data_type": "int",
      "indexed": true,
      "character_count": 10,
      "references": {
        "provinces": {
          "id": {}
        }
      }
    },
    "province_name": {
      "data_type": "varchar",
      "character_count": 45
    },
    "resource_id": {
      "data_type": "varchar",
      "not_null": true,
      "indexed": true,
      "character_count": 20
    },
    "updated_at": {
      "data_type": "timestamp",
      "not_null": true,
      "default": "CURRENT_TIMESTAMP"
    },
    "vendor_id": {
      "data_type": "int",
      "not_null": true,
      "indexed": true,
      "character_count": 10,
      "references": {
        "vendors": {
          "id": {}
        }
      }
    },
    "zip": {
      "data_type": "varchar",
      "character_count": 45
    },
    "$indexes": [
      {
        "index_name": "PRIMARY",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "id_UNIQUE",
        "is_unique": true,
        "fields": [
          "id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "resource_id_UNIQUE",
        "is_unique": true,
        "fields": [
          "resource_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_warehouse_vendor_idx",
        "is_unique": false,
        "fields": [
          "vendor_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      },
      {
        "index_name": "fk_warehouses_provinces_idx",
        "is_unique": false,
        "fields": [
          "province_id"
        ],
        "index_type": "BTREE",
        "invisible": false,
        "collation": "A"
      }
    ]
  }
} as const