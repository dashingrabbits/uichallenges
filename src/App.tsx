// src/App.tsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getUsers } from "./services/getUsers";
import { User as UserType } from "./components/User/types/User.types";
import User from "./components/User";
import Card from "./components/Card";
import Search from "./components/Search";

const AppContainer = styled.div`
  padding: 20px;
  min-height: 100vh;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  h2 {
    margin: 0;
    color: #1f2937;
    font-size: 24px;
    font-weight: 500;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: #666;
`;

const ErrorContainer = styled.div`
  padding: 20px;
  text-align: center;
  color: #ef4444;
`;

function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <AppContainer>
        <ContentContainer>
          <Card>
            <LoadingContainer>Loading contacts...</LoadingContainer>
          </Card>
        </ContentContainer>
      </AppContainer>
    );
  }

  if (error) {
    return (
      <AppContainer>
        <ContentContainer>
          <Card>
            <ErrorContainer>Error: {error}</ErrorContainer>
          </Card>
        </ContentContainer>
      </AppContainer>
    );
  }

  return (
    <AppContainer>
      <ContentContainer>
        <Card
          header={
            <Header>
              <h2>Contacts ({filteredUsers.length})</h2>
              <Search
                onSearch={setSearchQuery}
                placeholder="Search contacts..."
              />
            </Header>
          }
        >
          {filteredUsers.map((user) => (
            <User
              key={user.id}
              user={user}
              onClick={() => console.log("Selected:", user.name)}
            />
          ))}
          {filteredUsers.length === 0 && (
            <div
              style={{ padding: "20px", textAlign: "center", color: "#666" }}
            >
              No contacts found
            </div>
          )}
        </Card>
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
