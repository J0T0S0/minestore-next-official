import { TItem } from '@/types/item';
import { TCategory } from '@/types/category-details';

export const testCategories: Record<string, { category: TCategory; items: TItem[] }> = {
    ranks: {
        category: {
            id: 1,
            parent_id: 0,
            name: 'Ranks',
            img: null,
            url: 'ranks',
            description: 'Purchase premium ranks to unlock exclusive features and benefits',
            sorting: 1,
            is_enable: 1,
            gui_item_id: null,
            is_cumulative: 0,
            is_listing: 0,
            is_comparison: 0,
            is_stacked: 0,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            comparison: [],
            comparisons: []
        },
        items: [
            {
                id: 1,
                name: 'Quantum',
                description: 'Quantum Rank - Access to VIP features',
                price: 9.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'VIP Chat Access' },
                    { comparison_id: 2, value: 'Special Prefix' },
                    { comparison_id: 3, value: 'Particle Effect' }
                ],
                stacked_tiers: null
            },
            {
                id: 2,
                name: 'Zenith',
                description: 'Zenith Rank - Premium access with exclusive perks',
                price: 19.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'All Quantum Features' },
                    { comparison_id: 2, value: 'Custom Cosmetics' },
                    { comparison_id: 3, value: 'Exclusive Commands' },
                    { comparison_id: 4, value: 'Priority Support' }
                ],
                stacked_tiers: null
            },
            {
                id: 3,
                name: 'Vortex',
                description: 'Vortex Rank - Ultimate power and benefits',
                price: 29.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'All Zenith Features' },
                    { comparison_id: 2, value: 'Admin Powers' },
                    { comparison_id: 3, value: 'Event Access' },
                    { comparison_id: 4, value: 'Economy Multiplier' },
                    { comparison_id: 5, value: 'Custom Prefix Color' }
                ],
                stacked_tiers: null
            },
            {
                id: 4,
                name: 'Nexus',
                description: 'Nexus Rank - Peak performance rank',
                price: 39.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'All Vortex Features' },
                    { comparison_id: 2, value: 'Unlimited Plots' },
                    { comparison_id: 3, value: 'VIP Lounge Access' },
                    { comparison_id: 4, value: 'Server Resources' },
                    { comparison_id: 5, value: '2x Economy Multiplier' }
                ],
                stacked_tiers: null
            },
            {
                id: 5,
                name: 'Aurora',
                description: 'Aurora Rank - Legendary status',
                price: 49.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'All Nexus Features' },
                    { comparison_id: 2, value: 'Highest Status' },
                    { comparison_id: 3, value: '3x Economy Multiplier' },
                    { comparison_id: 4, value: 'Game Master Powers' },
                    { comparison_id: 5, value: 'Lifetime Support' },
                    { comparison_id: 6, value: 'Hall of Fame' }
                ],
                stacked_tiers: null
            }
        ]
    },
    keys: {
        category: {
            id: 2,
            parent_id: 0,
            name: 'Keys',
            img: null,
            url: 'keys',
            description: 'Unlock special content and rewards with mystery keys',
            sorting: 2,
            is_enable: 1,
            gui_item_id: null,
            is_cumulative: 0,
            is_listing: 0,
            is_comparison: 0,
            is_stacked: 0,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            comparison: [],
            comparisons: []
        },
        items: [
            {
                id: 6,
                name: 'Eclipse',
                description: 'Eclipse Key - Rare rewards inside',
                price: 4.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'Rare Items' },
                    { comparison_id: 2, value: 'Random Rewards' }
                ],
                stacked_tiers: null
            },
            {
                id: 7,
                name: 'Treasure',
                description: 'Treasure Key - Exclusive loot guaranteed',
                price: 7.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'Exclusive Loot' },
                    { comparison_id: 2, value: 'Guaranteed Items' },
                    { comparison_id: 3, value: 'Higher Drop Rate' }
                ],
                stacked_tiers: null
            },
            {
                id: 8,
                name: 'Quantum',
                description: 'Quantum Key - Legendary items awaiting',
                price: 9.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'Legendary Items' },
                    { comparison_id: 2, value: 'Premium Drop Pool' },
                    { comparison_id: 3, value: 'Ultra Rare Items' },
                    { comparison_id: 4, value: 'Maximum Value' }
                ],
                stacked_tiers: null
            },
            {
                id: 9,
                name: 'Spawners',
                description: 'Spawner Key - Generate valuable spawner items',
                price: 12.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'Spawner Rewards' },
                    { comparison_id: 2, value: 'Mob Spawners' },
                    { comparison_id: 3, value: 'Income Gen' }
                ],
                stacked_tiers: null
            }
        ]
    },
    'monthly-deals': {
        category: {
            id: 3,
            parent_id: 0,
            name: 'Monthly/Seasonal Deals',
            img: null,
            url: 'monthly-deals',
            description: 'Limited time offers and seasonal promotions',
            sorting: 3,
            is_enable: 1,
            gui_item_id: null,
            is_cumulative: 0,
            is_listing: 0,
            is_comparison: 0,
            is_stacked: 0,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            comparison: [],
            comparisons: []
        },
        items: [
            {
                id: 10,
                name: 'Valentine Bundle',
                description: 'Special Valentine themed items bundle',
                price: 19.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'Limited Time Offer' },
                    { comparison_id: 2, value: 'Special Cosmetics' },
                    { comparison_id: 3, value: 'Exclusive Items' }
                ],
                stacked_tiers: null
            },
            {
                id: 11,
                name: 'Spring Collection',
                description: 'Fresh new seasonal spring items',
                price: 24.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'Spring Themed' },
                    { comparison_id: 2, value: 'New Item Set' },
                    { comparison_id: 3, value: 'Special Bundle' },
                    { comparison_id: 4, value: 'Seasonal Exclusive' }
                ],
                stacked_tiers: null
            },
            {
                id: 12,
                name: 'Limited Edition Pack',
                description: 'Exclusive limited time pack',
                price: 34.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: true,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'Only 100 Available' },
                    { comparison_id: 2, value: 'Exclusive Items' },
                    { comparison_id: 3, value: 'Collector\'s Edition' },
                    { comparison_id: 4, value: 'Premium Bundle' }
                ],
                stacked_tiers: null
            }
        ]
    },
    'rank-upgrades': {
        category: {
            id: 4,
            parent_id: 0,
            name: 'Rank Upgrades',
            img: null,
            url: 'rank-upgrades',
            description: 'Upgrade your current rank to unlock new features',
            sorting: 4,
            is_enable: 1,
            gui_item_id: null,
            is_cumulative: 0,
            is_listing: 0,
            is_comparison: 0,
            is_stacked: 0,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            comparison: [],
            comparisons: []
        },
        items: [
            {
                id: 13,
                name: 'Basic to Quantum',
                description: 'Upgrade to Quantum rank',
                price: 9.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'Instant Upgrade' },
                    { comparison_id: 2, value: 'All New Features' },
                    { comparison_id: 3, value: 'Keep All Benefits' }
                ],
                stacked_tiers: null
            },
            {
                id: 14,
                name: 'Quantum to Zenith',
                description: 'Upgrade to Zenith rank',
                price: 9.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'Seamless Upgrade' },
                    { comparison_id: 2, value: 'Premium Powers' },
                    { comparison_id: 3, value: 'Custom Commands' }
                ],
                stacked_tiers: null
            },
            {
                id: 15,
                name: 'Zenith to Vortex',
                description: 'Upgrade to Vortex rank',
                price: 9.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'Admin Powers' },
                    { comparison_id: 2, value: 'Event Access' },
                    { comparison_id: 3, value: 'Economy Boost' }
                ],
                stacked_tiers: null
            }
        ]
    },
    perks: {
        category: {
            id: 5,
            parent_id: 0,
            name: 'Perks/Permissions',
            img: null,
            url: 'perks',
            description: 'Purchase individual perks and permissions',
            sorting: 5,
            is_enable: 1,
            gui_item_id: null,
            is_cumulative: 0,
            is_listing: 0,
            is_comparison: 0,
            is_stacked: 0,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            comparison: [],
            comparisons: []
        },
        items: [
            {
                id: 16,
                name: 'Flight Permission',
                description: 'Ability to fly on the server',
                price: 2.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'Fly Everywhere' },
                    { comparison_id: 2, value: 'Speed Control' }
                ],
                stacked_tiers: null
            },
            {
                id: 17,
                name: 'Vanish Perk',
                description: 'Go invisible and hide from players',
                price: 3.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'Complete Invisibility' },
                    { comparison_id: 2, value: 'Online Status Hidden' },
                    { comparison_id: 3, value: 'Spectator Mode' }
                ],
                stacked_tiers: null
            },
            {
                id: 18,
                name: 'God Mode',
                description: 'Become invincible',
                price: 4.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'Invincibility' },
                    { comparison_id: 2, value: 'No Fall Damage' },
                    { comparison_id: 3, value: 'Fire Immunity' },
                    { comparison_id: 4, value: 'Ultimate Power' }
                ],
                stacked_tiers: null
            }
        ]
    },
    cosmetics: {
        category: {
            id: 6,
            parent_id: 0,
            name: 'Cosmetics',
            img: null,
            url: 'cosmetics',
            description: 'Customize your character with cosmetic items',
            sorting: 6,
            is_enable: 1,
            gui_item_id: null,
            is_cumulative: 0,
            is_listing: 0,
            is_comparison: 0,
            is_stacked: 0,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            comparison: [],
            comparisons: []
        },
        items: [
            {
                id: 19,
                name: 'Diamond Sword Skin',
                description: 'Shiny diamond sword cosmetic',
                price: 1.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'Shiny Appearance' },
                    { comparison_id: 2, value: 'Custom Texture' }
                ],
                stacked_tiers: null
            },
            {
                id: 20,
                name: 'Neon Wings',
                description: 'Glowing neon wings particle effect',
                price: 2.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'Particle Effect' },
                    { comparison_id: 2, value: 'Neon Colors' },
                    { comparison_id: 3, value: 'Custom Model' }
                ],
                stacked_tiers: null
            },
            {
                id: 21,
                name: 'Rainbow Trail',
                description: 'Rainbow colored particle trail',
                price: 2.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'Rainbow Colors' },
                    { comparison_id: 2, value: 'Trail Effect' },
                    { comparison_id: 3, value: 'Animated' }
                ],
                stacked_tiers: null
            },
            {
                id: 22,
                name: 'Golden Crown',
                description: 'Displays a golden crown above your head',
                price: 3.99,
                discount: 0,
                image: null,
                active: true,
                featured: false,
                is_unavailable: false,
                gifting: false,
                is_subs: false,
                is_subs_only: false,
                custom_price: 0,
                min_price: 0,
                comparison: [
                    { comparison_id: 1, value: 'Golden Appearance' },
                    { comparison_id: 2, value: 'Custom Model' },
                    { comparison_id: 3, value: 'Status Symbol' }
                ],
                stacked_tiers: null
            }
        ]
    }
};
