import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Eye, MessageCircle, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';

interface ProductCatalogueProps {
  onAddToCart: (product: Product, sqFt?: number) => void;
  onViewDetails: (product: Product) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({
  onAddToCart,
  onViewDetails,
  selectedCategory,
  onCategoryChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Films' },
    { id: 'sun-control', label: 'Sun Control Film' },
    { id: 'car-tinting', label: 'Car Tinting Film' },
    { id: 'frosted', label: 'Frosted Glass Film' },
    { id: 'privacy', label: 'Privacy Film' },
    { id: 'reflective', label: 'Reflective Film' },
    { id: 'decorative', label: 'Decorative Film' },
    { id: 'safety', label: 'Safety & Security' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.categoryLabel.toLowerCase().includes(q) ||
        product.vlt.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.idealFor.some((item) => item.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddWithFeedback = (product: Product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  };

  return (
    <section id="products" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header & Description */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-2 uppercase tracking-wide">
            <span>Online Product Shop</span>
            <span aria-hidden="true">·</span>
            <span>All Types Glass Film</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Premium Glass Film Catalogue
          </h2>
        </div>
        <p className="text-sm text-slate-300 max-w-md leading-relaxed">
          Explore our range of architectural, corporate, and automotive window films. Select products into your Enquiry Cart to receive a custom quotation from Md Tarik Shaikh.
        </p>
      </div>

      {/* Search and Category Filter Bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between mb-8 pb-6 border-b border-slate-800">
        {/* Search Input */}
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by film name, VLT, frosted, reflective..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700/80 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-xs text-slate-400 mb-6 flex items-center justify-between">
        <span>
          Showing <strong className="text-white font-mono">{filteredProducts.length}</strong> film options
        </span>
        <span className="text-slate-400">On-site measurement & physical sample testing available</span>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="p-12 text-center bg-slate-900/40 rounded-2xl border border-slate-800">
          <p className="text-slate-300 text-sm">No film matched your search criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              onCategoryChange('all');
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold text-cyan-400 bg-slate-800 rounded-lg hover:bg-slate-700"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const isJustAdded = addedId === product.id;
            return (
              <div
                key={product.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 hover:border-slate-700 transition-all flex flex-col justify-between overflow-hidden shadow-lg group"
              >
                {/* Image Carrier with Fallback */}
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Clean unboxed category label */}
                  <div className="absolute top-3 left-3 text-[11px] font-semibold text-cyan-300 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800">
                    {product.categoryLabel}
                  </div>

                  {product.popular && (
                    <div className="absolute top-3 right-3 text-[11px] font-bold text-slate-950 bg-cyan-400 px-2.5 py-1 rounded-md shadow-sm">
                      Popular Choice
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                    <span className="font-mono text-cyan-300 font-semibold">{product.vlt} VLT</span>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-emerald-500/30">
                      Free Site Measurement
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-4">
                      {product.tagline}
                    </p>

                    {/* Key Specifications Grid */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800/80 text-center mb-4">
                      <div>
                        <div className="text-[10px] text-slate-400">Solar Control</div>
                        <div className="text-xs font-mono font-bold text-white">
                          {product.heatRejection}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400">UV Layer</div>
                        <div className="text-xs font-mono font-bold text-cyan-400">
                          {product.uvProtection}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400">Thickness</div>
                        <div className="text-xs font-mono font-bold text-emerald-400">
                          {product.thickness}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onViewDetails(product)}
                        className="py-2.5 px-3 text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-slate-700/60 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-slate-400" />
                        <span>View Specs</span>
                      </button>

                      <button
                        onClick={() => handleAddWithFeedback(product)}
                        className={`py-2.5 px-3 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm ${
                          isJustAdded
                            ? 'bg-emerald-500 text-slate-950'
                            : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950'
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Quote</span>
                          </>
                        )}
                      </button>
                    </div>

                    <a
                      href={`https://wa.me/917276600033?text=${encodeURIComponent(
                        `Hello Md Tarik Shaikh, I am interested in ${product.name} (${product.categoryLabel}). Please share quotation and on-site measurement details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 text-[11px] font-semibold text-slate-400 hover:text-cyan-400 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-cyan-400" />
                      <span>WhatsApp Direct Enquiry</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
