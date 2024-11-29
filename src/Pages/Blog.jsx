import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import "../Pages/Blog.css";

const Blog = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(false); // Add a loading state
  const db = getFirestore();

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "purchases"));
        const purchaseData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPurchases(purchaseData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching purchases: ", error);
        setLoading(false);
      }
    };

    fetchPurchases();
  }, [db]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this purchase?");
    if (!confirmDelete) return;

    try {
      // Delete the document from Firebase
      await deleteDoc(doc(db, "purchases", id));

      // Update the state to remove the deleted item
      setPurchases((prevPurchases) => prevPurchases.filter((purchase) => purchase.id !== id));

      alert("Purchase deleted successfully!");
    } catch (error) {
      console.error("Error deleting purchase: ", error);
      alert("Failed to delete the purchase. Please try again.");
    }
  };

  return (
    <div className="purchases-container">
      <h1>Purchased Plans</h1>
      {loading ? (
        <p>Loading purchases...</p>
      ) : purchases.length === 0 ? (
        <p>No purchases made yet!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Age</th>
              <th>Location</th>
              <th>Plan</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase) => (
              <tr key={purchase.id}>
                <td>{purchase.username}</td>
                <td>{purchase.age}</td>
                <td>{purchase.location}</td>
                <td>{purchase.plan}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(purchase.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Blog;
