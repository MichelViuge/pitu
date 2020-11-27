import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root:jacare1@localhost:3306/pitu');

export default sequelize;