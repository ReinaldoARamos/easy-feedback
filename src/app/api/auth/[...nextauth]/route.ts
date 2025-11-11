import NextAuth, { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],

  session: {
    strategy: "jwt", // usando jwtp ao inves do prisma
  },

  callbacks: {
    //  callback
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },

    
    async session({ session, token }) {
      if (token && session.user) {
        (session.user ).id = token.id; // tipagem feita no @types
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
