interface PortfolioFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function PortfolioFilter({ categories, selectedCategory, onCategoryChange }: PortfolioFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 ${
            selectedCategory === category
              ? "bg-gradient-to-r from-primary-500 to-accent-400 text-white"
              : "bg-dark-800 text-gray-300 hover:bg-accent-400 hover:text-white"
          }`}
          data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {category === "all" ? "All Projects" : category}
        </button>
      ))}
    </div>
  );
}
