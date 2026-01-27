
import { db } from './firebase';
import { 
  collection, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc,
  deleteDoc, 
  doc, 
  query, 
  orderBy,
  Timestamp 
} from "firebase/firestore";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
  category: string;
  createdAt?: Timestamp;
}

const COLLECTION_NAME = "blog_posts";

export const getPosts = async (): Promise<BlogPost[]> => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as BlogPost[];
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    return [];
  }
};

export const getPostById = async (id: string): Promise<BlogPost | undefined> => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as BlogPost;
    }
    return undefined;
  } catch (error) {
    console.error("Erro ao buscar post por ID:", error);
    return undefined;
  }
};

export const savePost = async (post: Omit<BlogPost, 'id' | 'date'>) => {
  try {
    const newPost = {
      ...post,
      date: new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }),
      createdAt: Timestamp.now()
    };
    const docRef = await addDoc(collection(db, COLLECTION_NAME), newPost);
    return { id: docRef.id, ...newPost };
  } catch (error) {
    console.error("Erro ao salvar post:", error);
    throw error;
  }
};

export const updatePost = async (id: string, post: Partial<BlogPost>) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    // Removemos o ID do objeto de atualização para o Firestore não reclamar
    const { id: _, ...dataToUpdate } = post as any;
    await updateDoc(docRef, dataToUpdate);
  } catch (error) {
    console.error("Erro ao atualizar post:", error);
    throw error;
  }
};

export const deletePost = async (id: string) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch (error) {
    console.error("Erro ao deletar post:", error);
    throw error;
  }
};
