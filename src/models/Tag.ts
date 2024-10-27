import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db";

interface TagAttributes {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TagInstance
  extends Model<TagAttributes, Optional<TagAttributes, "id">>,
    TagAttributes {}

const Tag = sequelize.define<TagInstance>(
  "Tag",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "Tag",
  }
);

export default Tag;
