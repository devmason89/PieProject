module.exports = (sequelize, DataTypes) => {
    const Pie = sequelize.define('pie', {        //define mappings between attribute and the table
        nameOfPie: {
            type: DataTypes.STRING,
            allowNull: false                    //means user has to input something. it's required 
        },
        baseOfPie: {
            type: DataTypes.STRING,
            allowNull: false
        },
        crust: {
            type: DataTypes.STRING,
            allowNull: false
        },
        timeToBake: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        servings: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    })
    return Pie;                               //go outside of function, but within the define to make sure it is global
}                                              //mapping js types onto sequelize types 