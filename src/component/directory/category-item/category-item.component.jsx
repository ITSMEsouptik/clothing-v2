import "./category-item.styles.scss";

const Directory = ({directory}) => {
  const {id,title,imageUrl} = directory;
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

const CategoryItem = ({category}) => {
  return (
    <Directory directory={category}/>
  );
};

export default CategoryItem;
