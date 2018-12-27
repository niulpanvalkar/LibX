// import logger from "lib/logger";
import mysql from "mysql";
import sqlConnection from "config/db";

class UtilityModel {

    constructor () {}

    getFields = async (fieldsArray, table, whereObject) => {
        // logger.info("UtilityController : getFields");

        return new Promise((resolve, reject) => {
            try {
                let sql = "" ;
                if(whereObject == undefined || whereObject== null){
                    sql += mysql.format("SELECT ?? FROM ?? ", [fieldsArray, table]);    
                }
                else{

                    sql += mysql.format("SELECT ?? FROM ?? WHERE ?", [fieldsArray, table, whereObject]);
                    if (Object.keys(whereObject).length > 1) {
                    let splitted_sql = sql.split("WHERE");
                    splitted_sql[1] = splitted_sql[1].replace(/,/g, " AND ");
                    sql = splitted_sql[0] + "WHERE" + splitted_sql[1];
                    }
                }
                
                // logger.debug(sql);
                sqlConnection.query(sql, (err, result) => {
                    if (err) {
                        logger.error("UtilityModel : getFields", err);
                        reject(err);
                    }
                    else {
                        resolve(result);
                    }
                });
            }
            catch (err) {
                // logger.error(`UtilityModel : getFields :: error ${err} `);
                reject(err);
            }
        });
    };
}

export default new UtilityModel();