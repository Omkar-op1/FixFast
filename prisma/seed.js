import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with services...');

  await prisma.service.createMany({
    data: [
      {
        name: 'Screen Replacement',
        description: 'Replace cracked or broken screens for mobile devices.',
        price: 2499.99,
        category: 'Mobile',
        estimatedTime: '2 hours',
      },
      {
        name: 'Battery Replacement',
        description: 'Replace old or damaged batteries for smartphones and laptops.',
        price: 1799.99,
        category: 'Mobile',
        estimatedTime: '1 hour',
      },
      {
        name: 'Laptop Screen Repair',
        description: 'Fix or replace broken laptop screens.',
        price: 4999.99,
        category: 'Laptop',
        estimatedTime: '3 hours',
      },
      {
        name: 'Keyboard Replacement',
        description: 'Replace damaged laptop keyboards with new ones.',
        price: 1999.99,
        category: 'Laptop',
        estimatedTime: '2 hours',
      },
      {
        name: 'Software Installation',
        description: 'Install operating systems and required software on laptops & PCs.',
        price: 999.99,
        category: 'Laptop',
        estimatedTime: '1.5 hours',
      },
      {
        name: 'TV Screen Repair',
        description: 'Repair or replace broken TV screens.',
        price: 6999.99,
        category: 'TV',
        estimatedTime: '4 hours',
      },
      {
        name: 'Speaker Repair',
        description: 'Fix faulty or damaged speakers in mobile devices and TVs.',
        price: 1299.99,
        category: 'Mobile',
        estimatedTime: '1.5 hours',
      },
      {
        name: 'Cooling Fan Replacement',
        description: 'Replace defective cooling fans in laptops and gaming PCs.',
        price: 2499.99,
        category: 'Laptop',
        estimatedTime: '2 hours',
      },
      {
        name: 'Charging Port Repair',
        description: 'Fix broken charging ports in mobile devices and laptops.',
        price: 1599.99,
        category: 'Mobile',
        estimatedTime: '1 hour',
      },
      {
        name: 'Water Damage Repair',
        description: 'Repair mobile devices affected by water damage.',
        price: 3499.99,
        category: 'Mobile',
        estimatedTime: '3 hours',
      },
    ],
  });

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
