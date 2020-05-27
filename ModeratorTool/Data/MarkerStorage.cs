using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    public interface IMarkerApprover
    {
        void ApproveMarker(int id);
    }

    public interface IMarkerReader
    {
        dynamic GetAllMarkers();
        dynamic GetMarkerById(int id);
    }
    public class MarkerStorage : IMarkerApprover, IMarkerReader
    {
        public void ApproveMarker(int id)
        {
            throw new NotImplementedException();
        }

        public dynamic GetAllMarkers()
        {
            throw new NotImplementedException();
        }

        public dynamic GetMarkerById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
