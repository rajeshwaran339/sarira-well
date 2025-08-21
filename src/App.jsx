import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import RecipesPage from './pages/RecipesPage'
import TamilCulturePage from './pages/TamilCulturePage'
import GalleryPage from './pages/GalleryPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import ShippingDeliveryPage from './pages/ShippingDeliveryPage'
import ReturnsRefundsPage from './pages/ReturnsRefundsPage'
import StoreLocatorPage from './pages/StoreLocatorPage'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/tamil-culture" element={<TamilCulturePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/shipping-and-delivery" element={<ShippingDeliveryPage />} />
        <Route path="/returns-and-refunds" element={<ReturnsRefundsPage />} />
        <Route path="/store-locator" element={<StoreLocatorPage />} />
      </Routes>
    </div>
  )
}

export default App