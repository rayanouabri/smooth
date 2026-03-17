/**
 * Google Analytics 4 - Tracking utility
 *
 * Replace GA_MEASUREMENT_ID with your actual GA4 Measurement ID (G-XXXXXXXXXX)
 * Get it from: https://analytics.google.com → Admin → Data Streams → Web
 */

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

// Initialize GA4
export function initGA() {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;

  // Load gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // We send manually on route change
    cookie_flags: 'SameSite=Lax;Secure',
  });
}

// Page view tracking (call on each route change)
export function trackPageView(path, title) {
  if (!GA_MEASUREMENT_ID || !window.gtag) return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}

// Custom event tracking
export function trackEvent(eventName, params = {}) {
  if (!GA_MEASUREMENT_ID || !window.gtag) return;
  window.gtag('event', eventName, params);
}

// ==========================================
// FUNNEL TRACKING EVENTS
// ==========================================

// Step 1: User visits the site
export function trackVisit() {
  trackEvent('funnel_visit', { funnel_step: 'visit' });
}

// Step 2: User views a course
export function trackCourseView(courseId, courseTitle, isPremium) {
  trackEvent('funnel_course_view', {
    funnel_step: 'course_view',
    course_id: courseId,
    course_title: courseTitle,
    is_premium: isPremium,
  });
}

// Step 3: User signs up
export function trackSignup(method = 'email') {
  trackEvent('sign_up', {
    funnel_step: 'signup',
    method,
  });
}

// Step 4: User enrolls in a course
export function trackEnrollment(courseId, courseTitle) {
  trackEvent('funnel_enrollment', {
    funnel_step: 'enrollment',
    course_id: courseId,
    course_title: courseTitle,
  });
}

// Step 5: User views pricing
export function trackPricingView() {
  trackEvent('funnel_pricing_view', { funnel_step: 'pricing_view' });
}

// Step 6: User clicks checkout
export function trackCheckoutStart(plan, price) {
  trackEvent('begin_checkout', {
    funnel_step: 'checkout_start',
    currency: 'EUR',
    value: price,
    items: [{ item_name: plan }],
  });
}

// Step 7: Payment success
export function trackPurchase(plan, price, transactionId) {
  trackEvent('purchase', {
    funnel_step: 'purchase',
    transaction_id: transactionId,
    currency: 'EUR',
    value: price,
    items: [{ item_name: plan }],
  });
}

// Lesson completion
export function trackLessonComplete(courseId, lessonId) {
  trackEvent('lesson_complete', {
    course_id: courseId,
    lesson_id: lessonId,
  });
}

// Course completion
export function trackCourseComplete(courseId, courseTitle) {
  trackEvent('course_complete', {
    course_id: courseId,
    course_title: courseTitle,
  });
}

// AI Chat usage
export function trackAIChatMessage() {
  trackEvent('ai_chat_message');
}

// Forum interaction
export function trackForumPost() {
  trackEvent('forum_post_created');
}

// Login
export function trackLogin(method = 'email') {
  trackEvent('login', { method });
}
