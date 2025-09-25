(function (window) {
    const KEYS = {
        USERS: 'skillswap_users',
        CURRENT_USER: 'skillswap_current_user',
        SKILLS: 'skillswap_skills',
        POSTS: 'skillswap_posts'
    };

    const defaultSkills = [
        {
            title: "Coding (Programming)",
            description: "Learn programming fundamentals, algorithms, and modern JavaScript frameworks.",
            image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
            available: 76,
            rating: 4.8
        },
        {
            title: "UI/UX Design",
            description: "Design beautiful, accessible interfaces using Figma and proven UX methods.",
            image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
            available: 52,
            rating: 4.7
        },
        {
            title: "Graphic Design",
            description: "Learn logo design, branding, and Adobe Creative Suite skills.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            available: 42,
            rating: 4.6
        },
        {
            title: "Cooking & Baking",
            description: "Exchange cooking techniques from various cuisines around the world.",
            image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            available: 56,
            rating: 4.9
        },
        {
            title: "Yoga & Meditation",
            description: "Learn different yoga styles and meditation techniques for mindfulness.",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            available: 38,
            rating: 4.7
        },
        {
            title: "Digital Marketing",
            description: "Master SEO, social media marketing, and content strategy.",
            image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            available: 29,
            rating: 4.5
        },
        {
            title: "Music Production",
            description: "Learn DAWs, mixing, mastering, and sound design from experienced producers.",
            image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
            available: 31,
            rating: 4.8
        },
        {
            title: "Designing (Creative)",
            description: "Enhance creativity with typography, color theory, and composition.",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
            available: 44,
            rating: 4.6
        }
    ];

    function seed() {
        if (!localStorage.getItem(KEYS.SKILLS)) {
            localStorage.setItem(KEYS.SKILLS, JSON.stringify(defaultSkills));
        }
        if (!localStorage.getItem(KEYS.USERS)) {
            localStorage.setItem(KEYS.USERS, JSON.stringify([]));
        }
        if (!localStorage.getItem(KEYS.POSTS)) {
            localStorage.setItem(KEYS.POSTS, JSON.stringify([]));
        }
    }

    function getSkills() {
        try { return JSON.parse(localStorage.getItem(KEYS.SKILLS) || '[]'); } catch (e) { return []; }
    }
    function setSkills(skills) {
        try { localStorage.setItem(KEYS.SKILLS, JSON.stringify(skills)); } catch (e) { }
    }

    function getUsers() {
        try { return JSON.parse(localStorage.getItem(KEYS.USERS) || '[]'); } catch (e) { return []; }
    }
    function saveUsers(users) {
        try { localStorage.setItem(KEYS.USERS, JSON.stringify(users)); } catch (e) { }
    }

    function getCurrentUser() {
        try { return JSON.parse(localStorage.getItem(KEYS.CURRENT_USER) || 'null'); } catch (e) { return null; }
    }
    function setCurrentUser(user) {
        try { localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify(user)); } catch (e) { }
    }

    function getPosts() {
        try { return JSON.parse(localStorage.getItem(KEYS.POSTS) || '[]'); } catch (e) { return []; }
    }
    function savePosts(posts) {
        try { localStorage.setItem(KEYS.POSTS, JSON.stringify(posts)); } catch (e) { }
    }

    function getUserAvatarKey(email) {
        return 'skillswap_avatar_' + (email || '');
    }

    seed();

    window.DB = {
        keys: KEYS,
        getSkills,
        setSkills,
        getUsers,
        saveUsers,
        getCurrentUser,
        setCurrentUser,
        getPosts,
        savePosts,
        getUserAvatarKey
    };
})(window);
