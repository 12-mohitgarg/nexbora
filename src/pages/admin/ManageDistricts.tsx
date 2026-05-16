import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../lib/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { ArrowLeft, Plus, Trash2, Edit2, Save, X } from 'lucide-react';

interface District {
  id: string;
  name: string;
}

export default function ManageDistricts() {
  const navigate = useNavigate();
  const [districts, setDistricts] = useState<District[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [newDistrictName, setNewDistrictName] = useState('');

  useEffect(() => {
    fetchDistricts();
  }, []);

  const fetchDistricts = async () => {
    try {
      const districtsRef = collection(db, 'districts');
      const q = query(districtsRef, orderBy('name'));
      const snapshot = await getDocs(q);
      const districtsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as District));
      setDistricts(districtsData);
    } catch (error) {
      console.error('Error fetching districts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDistrictName.trim()) return;

    try {
      await addDoc(collection(db, 'districts'), {
        name: newDistrictName.trim(),
        createdAt: new Date().toISOString()
      });
      setNewDistrictName('');
      fetchDistricts();
    } catch (error) {
      console.error('Error adding district:', error);
    }
  };

  const handleEdit = (district: District) => {
    setEditingId(district.id);
    setEditName(district.name);
  };

  const handleSave = async (id: string) => {
    try {
      await updateDoc(doc(db, 'districts', id), {
        name: editName.trim()
      });
      setEditingId(null);
      setEditName('');
      fetchDistricts();
    } catch (error) {
      console.error('Error updating district:', error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditName('');
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this district?')) return;

    try {
      await deleteDoc(doc(db, 'districts', id));
      fetchDistricts();
    } catch (error) {
      console.error('Error deleting district:', error);
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate('/admin-dashboard')} variant="ghost" className="text-white hover:bg-white/10">
              <ArrowLeft size={20} />
            </Button>
            <h1 className="text-2xl font-black tracking-tighter">Manage Districts</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-8">
        {/* Add New District Form */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 mb-8">
          <h2 className="text-xl font-black text-slate-900 mb-4">Add New District</h2>
          <form onSubmit={handleAdd} className="flex gap-4">
            <div className="flex-1">
              <Label className="uppercase tracking-[0.2em] text-[10px] font-black text-slate-400 mb-2 block">District Name</Label>
              <Input
                type="text"
                value={newDistrictName}
                onChange={(e) => setNewDistrictName(e.target.value)}
                className="h-12 rounded-xl"
                placeholder="Enter district name"
              />
            </div>
            <Button type="submit" className="h-12 px-6 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-xl mt-6">
              <Plus size={20} />
              Add
            </Button>
          </form>
        </div>

        {/* Districts List */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-xl font-black text-slate-900">All Districts ({districts.length})</h2>
          </div>

          {districts.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-slate-500 font-bold">No districts found</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-50">
              {districts.map((district) => (
                <div key={district.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  {editingId === district.id ? (
                    <div className="flex items-center gap-4 flex-1">
                      <Input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="h-10 rounded-xl flex-1"
                      />
                      <Button onClick={() => handleSave(district.id)} className="h-10 px-4 bg-green-600 hover:bg-green-700 text-white rounded-xl">
                        <Save size={16} />
                      </Button>
                      <Button onClick={handleCancel} className="h-10 px-4 bg-slate-600 hover:bg-slate-700 text-white rounded-xl">
                        <X size={16} />
                      </Button>
                    </div>
                  ) : (
                    <>
                      <span className="font-bold text-slate-900">{district.name}</span>
                      <div className="flex items-center gap-2">
                        <Button onClick={() => handleEdit(district)} className="h-10 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                          <Edit2 size={16} />
                        </Button>
                        <Button onClick={() => handleDelete(district.id)} className="h-10 px-4 bg-red-600 hover:bg-red-700 text-white rounded-xl">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
