import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Seed Customer
  const customer = await prisma.user.upsert({
    where: { email: 'customer@example.com' },
    update: {},
    create: {
      name: 'John Doe',
      email: 'customer@example.com',
      password: 'hashedpassword123', // Use a real hashed password in production
      phone: '9876543210',
      address: '123 Main Street, City',
      role: 'customer',
      lat: 18.5204,
      lng: 73.8567,
    },
  });

  // Seed Technician
  const technician = await prisma.user.upsert({
    where: { email: 'technician@example.com' },
    update: {},
    create: {
      name: 'Jane Smith',
      email: 'technician@example.com',
      password: 'hashedpassword456', // Use a real hashed password in production
      phone: '9876543211',
      address: '456 Tech Avenue, City',
      role: 'technician',
      lat: 18.5214,
      lng: 73.8577,
      rating: 4.8,
    },
  });

  console.log({ customer, technician });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
