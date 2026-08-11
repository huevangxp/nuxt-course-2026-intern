<template>
  <div class="d-flex flex-column ga-8">
    <!-- Hero Carousel Section -->
    <v-card flat border rounded="xl" class="overflow-hidden">
      <v-carousel
        cycle
        height="460"
        hide-delimiter-background
        show-arrows="hover"
        color="white"
      >
        <v-carousel-item
          v-for="(slide, i) in heroSlides"
          :key="i"
          :src="slide.src"
          cover
        >
          <!-- Gradient Overlay & Hero Content -->
          <div class="fill-height d-flex align-center px-6 px-md-12 text-white" style="background: linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 100%);">
            <div class="max-width-600">
              <v-chip color="primary" variant="flat" size="small" class="mb-4 text-uppercase font-weight-bold">
                {{ slide.badge }}
              </v-chip>
              <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">
                {{ slide.title }}
              </h1>
              <p class="text-subtitle-1 text-md-h6 font-weight-regular mb-6 text-grey-lighten-2">
                {{ slide.description }}
              </p>
              <div class="d-flex ga-4 flex-wrap">
                <v-btn
                  color="primary"
                  size="x-large"
                  rounded="pill"
                  elevation="4"
                  class="text-none font-weight-bold px-8"
                  prepend-icon="mdi-rocket-launch"
                >
                  Get Started
                </v-btn>
                <v-btn
                  variant="outlined"
                  color="white"
                  size="x-large"
                  rounded="pill"
                  class="text-none font-weight-bold px-8"
                  prepend-icon="mdi-play-circle-outline"
                >
                  Watch Demo
                </v-btn>
              </div>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-card>

    <!-- Key Platform Stats -->
    <v-row>
      <v-col v-for="(stat, i) in stats" :key="i" cols="12" sm="6" md="3">
        <v-card flat border rounded="lg" class="pa-5 d-flex align-center ga-4">
          <v-avatar :color="stat.color" variant="tonal" size="56" rounded="lg">
            <v-icon size="28">{{ stat.icon }}</v-icon>
          </v-avatar>
          <div>
            <div class="text-h5 font-weight-bold">{{ stat.count }}</div>
            <div class="text-caption text-medium-emphasis">{{ stat.label }}</div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Category Filter Bar -->
    <div>
      <div class="d-flex flex-column flex-sm-row justify-space-between align-sm-center mb-4 ga-2">
        <div>
          <h2 class="text-h4 font-weight-bold">Explore Courses</h2>
          <p class="text-body-2 text-medium-emphasis">Discover industry-recognized courses taught by expert mentors</p>
        </div>
      </div>

      <v-chip-group
        v-model="selectedCategory"
        mandatory
        selected-class="bg-primary text-white"
        class="py-2"
      >
        <v-chip
          v-for="category in categories"
          :key="category"
          :value="category"
          filter
          variant="tonal"
          size="large"
          class="font-weight-medium px-4"
        >
          {{ category }}
        </v-chip>
      </v-chip-group>
    </div>

    <!-- Course Cards Grid -->
    <v-row>
      <v-col
        v-for="course in filteredCourses"
        :key="course.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card
          hover
          flat
          border
          rounded="lg"
          class="fill-height d-flex flex-column overflow-hidden"
        >
          <!-- Image with Category Badge -->
          <v-img :src="course.image" height="200" cover class="align-start">
            <div class="pa-3">
              <v-chip color="primary" size="small" class="font-weight-bold">
                {{ course.category }}
              </v-chip>
            </div>
          </v-img>

          <!-- Card Content -->
          <v-card-text class="flex-grow-1 d-flex flex-column pa-5">
            <div class="d-flex align-center justify-space-between text-caption text-medium-emphasis mb-2">
              <div class="d-flex align-center ga-1">
                <v-icon size="16" color="amber-darken-2">mdi-star</v-icon>
                <span class="font-weight-bold text-high-emphasis">{{ course.rating }}</span>
                <span>({{ course.reviews }})</span>
              </div>
              <div class="d-flex align-center ga-1">
                <v-icon size="16">mdi-clock-outline</v-icon>
                <span>{{ course.duration }}</span>
              </div>
            </div>

            <h3 class="text-subtitle-1 font-weight-bold mb-2">
              {{ course.title }}
            </h3>

            <p class="text-body-2 text-medium-emphasis mb-4">
              {{ course.description }}
            </p>

            <v-spacer />

            <v-divider class="mb-4" />

            <!-- Instructor & Price Footer -->
            <div class="d-flex align-center justify-space-between">
              <div class="d-flex align-center ga-2">
                <v-avatar size="32">
                  <v-img :src="course.instructorAvatar" alt="Instructor" />
                </v-avatar>
                <span class="text-caption font-weight-medium">{{ course.instructor }}</span>
              </div>
              <div class="text-h6 font-weight-bold text-primary">
                {{ course.price }}
              </div>
            </div>
          </v-card-text>

          <!-- Card Action Button -->
          <v-card-actions class="px-5 pb-5 pt-0">
            <v-btn
              block
              color="primary"
              variant="tonal"
              rounded="lg"
              class="text-none font-weight-bold"
              prepend-icon="mdi-book-open-page-variant-outline"
            >
              Enroll Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Call to Action Banner -->
    <v-card color="primary" rounded="xl" class="pa-8 pa-md-12 text-white overflow-hidden elevation-4">
      <v-row align="center">
        <v-col cols="12" md="8">
          <h2 class="text-h4 text-md-h3 font-weight-bold mb-3">
            Ready to Start Your Tech Journey?
          </h2>
          <p class="text-body-1 text-grey-lighten-3 mb-0">
            Join over 50,000 students already building real-world projects and landing high-paying developer jobs.
          </p>
        </v-col>
        <v-col cols="12" md="4" class="text-md-end">
          <v-btn
            color="white"
            variant="flat"
            size="x-large"
            rounded="pill"
            class="text-primary font-weight-bold px-8 text-none"
            prepend-icon="mdi-account-plus-outline"
            to="/login"
          >
            Create Free Account
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedCategory = ref('All Courses')

const heroSlides = [
  {
    badge: 'Featured Release 2026',
    title: 'Master Modern Web Development',
    description: 'Learn Nuxt 3, Vue 3, TypeScript, and Vuetify to build high-performance web applications.',
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80'
  },
  {
    badge: 'AI & Data Science',
    title: 'Build Next-Gen AI Applications',
    description: 'Explore Deep Learning, LLMs, and Python automation with real-world industry hands-on labs.',
    src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'
  },
  {
    badge: 'UI/UX Architecture',
    title: 'Design Stunning User Experiences',
    description: 'Master Figma, design systems, micro-interactions, and responsive layout principles.',
    src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80'
  }
]

const stats = [
  { icon: 'mdi-account-group', count: '50,000+', label: 'Active Students', color: 'primary' },
  { icon: 'mdi-school', count: '120+', label: 'Expert Courses', color: 'success' },
  { icon: 'mdi-star', count: '4.9 / 5.0', label: 'Average Rating', color: 'warning' },
  { icon: 'mdi-certificate', count: '35,000+', label: 'Certificates Awarded', color: 'info' }
]

const categories = [
  'All Courses',
  'Web Development',
  'Mobile App',
  'UI/UX Design',
  'AI & Machine Learning',
  'Cloud & DevOps'
]

const courses = [
  {
    id: 1,
    title: 'Nuxt 3 & Vue 3 Masterclass 2026 Edition',
    description: 'Build fullstack reactive web apps using Nitro server engine, Pinia state management, and Vuetify components.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    instructor: 'Alex Rivera',
    instructorAvatar: 'https://i.pravatar.cc/100?img=33',
    rating: 4.9,
    reviews: 420,
    duration: '18h 45m',
    price: '$49.99'
  },
  {
    id: 2,
    title: 'Fullstack Mobile App Development with Flutter',
    description: 'Create cross-platform iOS and Android apps with beautiful native UI and Firebase backend.',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
    instructor: 'Sarah Jenkins',
    instructorAvatar: 'https://i.pravatar.cc/100?img=47',
    rating: 4.8,
    reviews: 310,
    duration: '22h 10m',
    price: '$59.99'
  },
  {
    id: 3,
    title: 'UI/UX Design Systems & Figma Architecture',
    description: 'Design responsive UI components, design tokens, autolayouts, and interactive prototypes.',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80',
    instructor: 'David Kim',
    instructorAvatar: 'https://i.pravatar.cc/100?img=12',
    rating: 4.9,
    reviews: 580,
    duration: '14h 30m',
    price: '$39.99'
  },
  {
    id: 4,
    title: 'Python for AI, Data Science & Machine Learning',
    description: 'Hands-on guide to NumPy, Pandas, Scikit-Learn, TensorFlow, and building predictive ML models.',
    category: 'AI & Machine Learning',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80',
    instructor: 'Elena Rostova',
    instructorAvatar: 'https://i.pravatar.cc/100?img=25',
    rating: 4.9,
    reviews: 890,
    duration: '32h 15m',
    price: '$69.99'
  },
  {
    id: 5,
    title: 'Docker & Kubernetes Cloud Architecture',
    description: 'Deploy, scale, and manage containerized microservices on AWS and Google Cloud Platform.',
    category: 'Cloud & DevOps',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80',
    instructor: 'Marcus Vance',
    instructorAvatar: 'https://i.pravatar.cc/100?img=60',
    rating: 4.7,
    reviews: 240,
    duration: '16h 00m',
    price: '$54.99'
  },
  {
    id: 6,
    title: 'Modern TypeScript & Frontend Engineering',
    description: 'Master generic types, decorators, async concurrency, and clean enterprise software patterns.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1516116211223-4c714cf99866?auto=format&fit=crop&w=600&q=80',
    instructor: 'Alex Rivera',
    instructorAvatar: 'https://i.pravatar.cc/100?img=33',
    rating: 4.9,
    reviews: 670,
    duration: '15h 20m',
    price: '$44.99'
  }
]

const filteredCourses = computed(() => {
  if (selectedCategory.value === 'All Courses') {
    return courses
  }
  return courses.filter(c => c.category === selectedCategory.value)
})
</script>